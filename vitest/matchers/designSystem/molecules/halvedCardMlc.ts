import { Describe, object, optional, string } from 'superstruct'

import { HalvedCardAction, HalvedCardMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const halvedCardActionSchema: Describe<HalvedCardAction> = object({
    type: string(),
    resource: optional(string()),
    subtype: optional(string()),
})

const schema: Describe<HalvedCardMlc> = object({
    image: string(),
    title: string(),
    label: string(),
    id: optional(string()),
    action: optional(halvedCardActionSchema),
})

export const halvedCardMlcSchema = schemaBuilder(schema)
