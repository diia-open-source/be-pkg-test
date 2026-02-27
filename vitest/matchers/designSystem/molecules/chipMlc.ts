import { Describe, boolean, object, optional, string } from 'superstruct'

import { ChipInfo, ChipMlc } from '@diia-inhouse/types'

import { badgeCounterAtmSchema } from '../atoms/badgeCounterAtm'
import { schemaBuilder } from '../utils'

const chipInfo: Describe<ChipInfo> = object({
    hallId: optional(string()),
})

const schema: Describe<ChipMlc> = object({
    label: string(),
    code: string(),
    active: optional(boolean()),
    selectedIcon: optional(string()),
    componentId: optional(string()),
    badgeCounterAtm: optional(badgeCounterAtmSchema()),
    chipInfo: optional(chipInfo),
})

export const chipMlcSchema = schemaBuilder(schema)
