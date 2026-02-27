import { Describe, object, optional, string } from 'superstruct'

import { VerticalCardAction, VerticalCardMlc } from '@diia-inhouse/types'

import { badgeCounterAtmSchema } from '../atoms/badgeCounterAtm'
import { schemaBuilder } from '../utils'

export const verticalCardActionSchema: Describe<VerticalCardAction> = object({
    type: string(),
    subtype: optional(string()),
    resource: optional(string()),
})

const schema: Describe<VerticalCardMlc> = object({
    image: string(),
    badgeCounterAtm: optional(badgeCounterAtmSchema()),
    title: string(),
    id: optional(string()),
    action: optional(verticalCardActionSchema),
})

export const verticalCardMlcSchema = schemaBuilder(schema)
