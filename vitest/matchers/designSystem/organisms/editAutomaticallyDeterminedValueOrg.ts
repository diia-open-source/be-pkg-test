import { Describe, object, optional, string } from 'superstruct'

import { EditAutomaticallyDeterminedValueOrg } from '@diia-inhouse/types'

import { inputTextMlcSchema } from '../molecules/inputTextMlc'
import { inputTextMultilineMlcSchema } from '../molecules/inputTextMultilineMlc'
import { schemaBuilder } from '../utils'

const schema: Describe<EditAutomaticallyDeterminedValueOrg> = object({
    componentId: optional(string()),
    title: optional(string()),
    label: optional(string()),
    value: optional(string()),
    inputTextMlc: optional(inputTextMlcSchema()),
    inputTextMultilineMlc: inputTextMultilineMlcSchema(),
})

export const editAutomaticallyDeterminedValueOrgSchema = schemaBuilder(schema)
