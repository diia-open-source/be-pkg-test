/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { inArray } from 'drizzle-orm'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'

type DatabaseAdapterType = 'mongo' | 'postgres'

type DbUtils<
    TFactory extends Record<string, (data?: any) => any>,
    TEntitySchema extends { [K in keyof TFactory]: ReturnType<TFactory[K]> },
    TEntityName extends keyof TEntitySchema & keyof TFactory & string,
    TDbReference extends Partial<Record<TEntityName, Partial<Record<DatabaseAdapterType, any>>>>,
    TSavableEntity extends keyof TDbReference,
> = {
    [K in TEntityName]: {
        seed: {
            make: (data?: Partial<TEntitySchema[K]>) => TEntitySchema[K]
            many: (count: number) => {
                make: (data?: Partial<TEntitySchema[K]>) => TEntitySchema[K][]
            } & (K extends TSavableEntity ? { save: (data?: Partial<TEntitySchema[K]>) => Promise<TEntitySchema[K][]> } : {})
        } & (K extends TSavableEntity ? { save: (data?: Partial<TEntitySchema[K]>) => Promise<TEntitySchema[K]> } : {})
    } & (K extends TSavableEntity
        ? {
              cleanupBy: <P extends keyof TEntitySchema[K]>(by: P, values: TEntitySchema[K][P][]) => Promise<TEntitySchema[K][]>
              updateBy: <P extends keyof TEntitySchema[K]>(
                  by: P,
                  values: TEntitySchema[K][P][],
                  data: Partial<TEntitySchema[K]>,
              ) => Promise<TEntitySchema[K][]>
          }
        : {})
}

type DbUtilsParams = {
    databaseAdapter: DatabaseAdapterType
    db?: NodePgDatabase<Record<string, unknown>>
}

export function buildDbUtilsFn<
    TFactory extends Record<string, (data?: any) => any>,
    TEntitySchema extends { [K in keyof TFactory]: ReturnType<TFactory[K]> },
    TEntityName extends keyof TEntitySchema & keyof TFactory & string,
    TDbReference extends Partial<Record<TEntityName, Partial<Record<DatabaseAdapterType, any>>>>,
    TSavableEntity extends keyof TDbReference,
>(factories: TFactory, references: TDbReference) {
    return ({ databaseAdapter, db }: DbUtilsParams): DbUtils<TFactory, TEntitySchema, TEntityName, TDbReference, TSavableEntity> => {
        function seedOne<TEntity extends TEntityName>(entity: TEntity) {
            const generator = factories[entity]

            return {
                make: (data?: Partial<TEntitySchema[TEntity]>) => {
                    return generator(data) as TEntitySchema[TEntity]
                },

                save: async (data?: Partial<TEntitySchema[TEntity]>) => {
                    const value = generator(data) as TEntitySchema[TEntity]

                    if (databaseAdapter === 'postgres') {
                        if (!db) {
                            throw new Error('Postgres database is not provided')
                        }

                        const pgTable = references[entity]?.postgres
                        if (!pgTable) {
                            throw new Error(`No postgres reference for ${entity}`)
                        }

                        const saved = await db.insert(pgTable).values(value).returning()

                        return saved[0] as TEntitySchema[TEntity & TSavableEntity]
                    }

                    const model = references[entity]?.mongo
                    if (!model?.create) {
                        throw new Error(`No mongo reference for ${entity}`)
                    }

                    const saved = await model.create(value)

                    return saved as TEntitySchema[TEntity & TSavableEntity]
                },
            }
        }

        function seedMany<TEntity extends TEntityName>(count: number, entity: TEntity) {
            const generator = factories[entity]

            return {
                make: (data?: Partial<TEntitySchema[TEntity]>) => {
                    const values = Array.from({ length: count }).map(() => generator(data) as TEntitySchema[TEntity])

                    return values
                },

                save: async (data?: Partial<TEntitySchema[TEntity]>) => {
                    const values = Array.from({ length: count }).map(() => generator(data) as TEntitySchema[TEntity])

                    if (databaseAdapter === 'postgres') {
                        if (!db) {
                            throw new Error('Postgres database is not provided')
                        }

                        const pgTable = references[entity]?.postgres
                        if (!pgTable) {
                            throw new Error(`No postgres reference for ${entity}`)
                        }

                        const saved = await db.insert(pgTable).values(values).returning()

                        return saved as TEntitySchema[TEntity & TSavableEntity][]
                    }

                    const model = references[entity]?.mongo
                    if (!model?.create) {
                        throw new Error(`No mongo reference for ${entity}`)
                    }

                    const saved = await model.create(values)

                    return saved as TEntitySchema[TEntity & TSavableEntity][]
                },
            }
        }

        async function cleanupBy<TEntity extends TEntityName, TProperty extends keyof TEntitySchema[TEntity]>(
            entity: TEntity & TSavableEntity,
            by: TProperty,
            values: TEntitySchema[TEntity][TProperty][],
        ): Promise<TEntitySchema[TEntity][]> {
            if (databaseAdapter === 'postgres') {
                if (!db) {
                    throw new Error('Postgres database is not provided')
                }

                const pgTable = references[entity]?.postgres
                if (!pgTable) {
                    throw new Error(`No postgres reference for ${entity}`)
                }

                const column = (pgTable as any)[by]
                const result = await db.delete(pgTable).where(inArray(column, values)).returning()

                return result as TEntitySchema[TEntity & TSavableEntity][]
            }

            const model = references[entity]?.mongo
            if (!model?.find || !model?.deleteMany) {
                throw new Error(`No mongo reference for ${entity}`)
            }

            const deleted = await model.find({ [by === 'id' ? '_id' : by]: { $in: values } })

            await model.deleteMany({ [by === 'id' ? '_id' : by]: { $in: values } })

            return deleted as TEntitySchema[TEntity & TSavableEntity][]
        }

        async function updateBy<TEntity extends TEntityName, TProperty extends keyof TEntitySchema[TEntity]>(
            entity: TEntity & TSavableEntity,
            by: TProperty,
            values: TEntitySchema[TEntity][TProperty][],
            data: Partial<TEntitySchema[TEntity]>,
        ): Promise<TEntitySchema[TEntity][]> {
            if (databaseAdapter === 'postgres') {
                if (!db) {
                    throw new Error('Postgres database is not provided')
                }

                const pgTable = references[entity]?.postgres
                if (!pgTable) {
                    throw new Error(`No postgres reference for ${entity}`)
                }

                const column = (pgTable as any)[by]
                const result = await db.update(pgTable).set(data).where(inArray(column, values)).returning()

                return result as TEntitySchema[TEntity & TSavableEntity][]
            }

            const model = references[entity]?.mongo
            if (!model?.updateMany || !model?.find) {
                throw new Error(`No mongo reference for ${entity}`)
            }

            await model.updateMany({ [by === 'id' ? '_id' : by]: { $in: values } }, { $set: data })

            return await (model.find({ [by === 'id' ? '_id' : by]: { $in: values } }) as Promise<TEntitySchema[TEntity & TSavableEntity][]>)
        }

        return new Proxy({} as DbUtils<TFactory, TEntitySchema, TEntityName, TDbReference, TSavableEntity>, {
            get: <TEntity extends TEntityName & TSavableEntity>(_: any, entity: TEntity) => ({
                seed: { ...seedOne(entity), many: (count: number) => seedMany(count, entity) },
                cleanupBy: <P extends keyof TEntitySchema[TEntity]>(by: P, values: TEntitySchema[TEntity][P][]) =>
                    cleanupBy(entity, by, values),
                updateBy: <P extends keyof TEntitySchema[TEntity]>(
                    by: P,
                    values: TEntitySchema[TEntity][P][],
                    data: Partial<TEntitySchema[TEntity]>,
                ) => updateBy(entity, by, values, data),
            }),
        })
    }
}
