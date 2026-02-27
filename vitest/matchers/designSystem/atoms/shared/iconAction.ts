import { Describe, object, optional, string } from 'superstruct'

import { IconAction } from '@diia-inhouse/types'

import { schemaBuilder } from '../../utils'

const schema: Describe<IconAction> = object({
    type: string(),
    subtype: optional(string()),
    resource: optional(string()),
})

export const iconActionSchema = schemaBuilder(schema)
