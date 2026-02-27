import { Describe, Struct, assign, object } from 'superstruct'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyStruct = Struct<any, any>

type A<T> = { [k in keyof T]?: AnyStruct }

type Builder<T> = (params?: A<T>) => Describe<T>

export function schemaBuilder<T>(schema: Describe<T>): Builder<T> {
    return (params?: A<T>): Describe<T> => {
        return params ? (assign(schema as AnyStruct, object(params)) as Describe<T>) : schema
    }
}
