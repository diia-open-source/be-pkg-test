import { Describe, enums, object, string } from 'superstruct'

import { CardMlcTicker, TickerAtmType } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<CardMlcTicker> = object({
    text: string(),
    type: enums(Object.values(TickerAtmType)),
})

export const cardMlcTickerSchema = schemaBuilder(schema)
