import { Describe, object, optional, string } from 'superstruct'

import { SmallEmojiPanelMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<SmallEmojiPanelMlc> = object({
    label: string(),
    icon: optional(iconAtmSchema),
})

export const smallEmojiPanelMlcSchema = schemaBuilder(schema)
