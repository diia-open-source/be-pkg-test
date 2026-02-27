import { Describe, enums, object, optional, string } from 'superstruct'

import { IconAtmActionType, TickerAtm, TickerAtmAction, TickerAtmType, TickerAtmUsage } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const tickerAtmActionSchema: Describe<TickerAtmAction> = object({
    type: enums(Object.values(IconAtmActionType)),
    subtype: optional(string()),
})

const schema: Describe<TickerAtm> = object({
    componentId: optional(string()),
    value: string(),
    type: enums(Object.values(TickerAtmType)),
    action: optional(tickerAtmActionSchema),
    usage: enums(Object.values(TickerAtmUsage)),
})

export const tickerAtmSchema = schemaBuilder(schema)
