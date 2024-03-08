import * as mongoose from 'mongoose'

type MockedQueryOperation = jest.FunctionPropertyNames<mongoose.Query<unknown, unknown>>

export default class MongooseMock {
    setResult(operation: MockedQueryOperation, result: unknown, repeat = 1): void {
        ;[...Array(repeat)].forEach(() => {
            jest.spyOn(mongoose.Query.prototype, operation).mockReturnValueOnce(result)
        })
    }

    setResultChain(operations: MockedQueryOperation[], result: unknown, repeat = 1): void {
        ;[...Array(repeat)].forEach(() => {
            operations.forEach((operation: MockedQueryOperation) => {
                jest.spyOn(mongoose.Query.prototype, operation).mockReturnThis()
            })

            jest.spyOn(mongoose.Query.prototype, 'exec').mockResolvedValueOnce(result)
        })
    }
}
