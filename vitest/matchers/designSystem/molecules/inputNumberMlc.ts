import { Describe, boolean, number, object, optional, string } from 'superstruct'

import { InputNumberMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<InputNumberMlc> = object({
    componentId: optional(string()),
    inputCode: optional(string()),
    label: string(),
    placeholder: optional(string()),
    hint: optional(string()),
    value: optional(string()),
    maxValue: optional(number()),
    minValue: optional(number()),
    mandatory: optional(boolean()),
    errorMessage: optional(string()),
})

export const inputNumberMlcSchema = schemaBuilder(schema)
