import { Describe, enums, number, object, optional, string } from 'superstruct'

import { ContentType, TextParameterAtm, TextParameterAtmData } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const textParameterAtmDataSchema: Describe<TextParameterAtmData> = object({
    name: string(),
    alt: optional(string()),
    resource: optional(string()),
    timeTimer: optional(number()),
})

const schema: Describe<TextParameterAtm> = object({
    type: enums(Object.values(ContentType)),
    data: optional(textParameterAtmDataSchema),
})

export const textParameterAtmSchema = schemaBuilder(schema)
