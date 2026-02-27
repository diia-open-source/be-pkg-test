import { Describe, object, optional, string } from 'superstruct'

import { SmallNoitificationAction, SmallNotificationMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const smallNotificationMlcActionSchema: Describe<SmallNoitificationAction> = object({
    type: string(),
    subtype: optional(string()),
    resource: optional(string()),
})

const schema: Describe<SmallNotificationMlc> = object({
    id: string(),
    label: string(),
    text: string(),
    action: optional(smallNotificationMlcActionSchema),
})

export const smallNotificationMlcSchema = schemaBuilder(schema)
