import { Describe, boolean, object, optional, string } from 'superstruct'

import { InputDateMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<InputDateMlc> = object({
    id: string(),
    blocker: optional(boolean()),
    label: string(),
    value: optional(string()),
    hint: optional(string()),
    dateFormat: optional(string()),
    componentId: string(),
    mandatory: optional(boolean()),
    placeholder: optional(string()),
})

export const inputDateMlcSchema = schemaBuilder(schema)
