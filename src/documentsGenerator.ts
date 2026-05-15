import lodash from 'lodash'
import { PartialDeep } from 'type-fest'

import documents from './stubs/documents/index.js'

// oxlint-disable-next-line typescript/unbound-method, @diia-inhouse/class/no-module-level-const
const { camelCase, cloneDeep, merge } = lodash

export default class DocumentsGenerator {
    generateDocument<T>(type: string, data?: PartialDeep<T>): T {
        const document = documents[camelCase(type)] as T | undefined
        if (!document) {
            throw new Error(
                `Document ${type} is not supported at the moment. You can generate those documents [${Object.keys(documents).join(', ')}]`,
            )
        }

        const clone = cloneDeep(document)
        if (!data) {
            return clone
        }

        return merge(clone, data)
    }
}
