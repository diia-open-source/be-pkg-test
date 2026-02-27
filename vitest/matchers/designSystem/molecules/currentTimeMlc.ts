import { Describe, object, optional, string } from 'superstruct'

import { CurrentTimeMlc, CurrentTimeMlcAction } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const currentTimeMlcActionSchema: Describe<CurrentTimeMlcAction> = object({
    type: string(),
    subtype: optional(string()),
    resource: optional(string()),
})

const schema: Describe<CurrentTimeMlc> = object({
    label: string(),
    componentId: optional(string()),
    action: optional(currentTimeMlcActionSchema),
    maxDate: optional(string()),
})

export const currentTimeMlcSchema = schemaBuilder(schema)
