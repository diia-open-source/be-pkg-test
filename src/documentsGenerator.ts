import { camelCase, cloneDeep, merge } from 'lodash'
import { PartialDeep } from 'type-fest'

import documents from './stubs/documents'

export default class DocumentsGenerator {
    generateDocument<T>(type: string, data?: PartialDeep<T>): T {
        const document = <T | undefined>documents[camelCase(type)]
        if (!document) {
            throw new Error(`Document ${type} is not supported at the moment. You can generate those documents [${Object.keys(documents)}]`)
        }

        const clone = cloneDeep(document)
        if (!data) {
            return clone
        }

        return merge(clone, data)
    }
}
