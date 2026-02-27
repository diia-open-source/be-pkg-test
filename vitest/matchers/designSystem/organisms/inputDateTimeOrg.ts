import { Describe, object, optional, string } from 'superstruct'

import { InputDateTimeOrg } from '@diia-inhouse/types'

import { inputDateMlcSchema } from '../molecules/inputDateMlc'
import { schemaBuilder } from '../utils'

const schema: Describe<InputDateTimeOrg> = object({
    componentId: string(),
    maxDate: optional(string()),
    minDate: optional(string()),
    inputCode: optional(string()),
    inputDateMlc: optional(inputDateMlcSchema()),
})

export const inputDateTimeOrgSchema = schemaBuilder(schema)
