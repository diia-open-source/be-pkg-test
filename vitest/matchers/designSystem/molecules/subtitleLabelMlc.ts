import { Describe, object, optional, string } from 'superstruct'

import { SubtitleLabelMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<SubtitleLabelMlc> = object({
    label: string(),
    icon: optional(iconAtmSchema),
    componentId: optional(string()),
})

export const subtitleLabelMlcSchema = schemaBuilder(schema)
