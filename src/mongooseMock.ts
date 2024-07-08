import * as mongoose from 'mongoose'

type MockedQueryOperation = jest.FunctionPropertyNames<mongoose.Query<unknown, unknown>>

export default class MongooseMock {
    setResult(operation: MockedQueryOperation, result: unknown, repeat = 1): void {
        for (let i = 0; i < repeat; i++) {
            jest.spyOn(mongoose.Query.prototype, operation).mockReturnValueOnce(result)
        }
    }

    setResultChain(operations: MockedQueryOperation[], result: unknown, repeat = 1): void {
        for (let i = 0; i < repeat; i++) {
            for (const operation of operations) {
                jest.spyOn(mongoose.Query.prototype, operation).mockReturnThis()
            }

            jest.spyOn(mongoose.Query.prototype, 'exec').mockResolvedValueOnce(result)
        }
    }
}
