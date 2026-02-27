import { Describe, object, optional, string } from 'superstruct'

import { SmallEmojiPanelPlaneMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<SmallEmojiPanelPlaneMlc> = object({
    label: string(),
    icon: optional(iconAtmSchema),
})

export const smallEmojiPanelPlaneMlcSchema = schemaBuilder(schema)
