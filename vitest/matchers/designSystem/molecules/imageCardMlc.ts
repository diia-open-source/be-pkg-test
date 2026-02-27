import { Describe, object, optional, string } from 'superstruct'

import { ImageCardAction, ImageCardMlc } from '@diia-inhouse/types'

import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'

const imageCardActionSchema: Describe<ImageCardAction> = object({
    type: string(),
    resource: optional(string()),
    subtype: optional(string()),
})

const schema: Describe<ImageCardMlc> = object({
    image: string(),
    label: string(),
    iconRight: iconSchema,
    action: optional(imageCardActionSchema),
})

export const imageCardMlcSchema = schemaBuilder(schema)
