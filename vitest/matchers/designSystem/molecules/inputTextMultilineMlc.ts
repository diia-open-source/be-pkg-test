import { Describe, array, boolean, object, optional, string } from 'superstruct'

import { InputTextMultilineMlc } from '@diia-inhouse/types'

import { validationAtmSchema } from '../atoms/validationAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<InputTextMultilineMlc> = object({
    id: optional(string()),
    blocker: optional(boolean()),
    label: string(),
    placeholder: optional(string()),
    hint: optional(string()),
    value: optional(string()),
    mandatory: optional(boolean()),
    validation: array(validationAtmSchema()),
    inputCode: optional(string()),
    componentId: optional(string()),
})

export const inputTextMultilineMlcSchema = schemaBuilder(schema)
