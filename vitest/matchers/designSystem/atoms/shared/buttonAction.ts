import { Describe, object, optional, string } from 'superstruct'

import { ButtonAction } from '@diia-inhouse/types'

import { schemaBuilder } from '../../utils'

const schema: Describe<ButtonAction> = object({
    type: string(),
    subtype: optional(string()),
    resource: optional(string()),
    condition: optional(string()),
    subresource: optional(string()),
})

export const buttonActionSchema = schemaBuilder(schema)
