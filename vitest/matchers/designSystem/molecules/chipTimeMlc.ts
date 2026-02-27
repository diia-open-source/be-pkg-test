import { Describe, boolean, object, optional, string } from 'superstruct'

import { ChipTimeMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<ChipTimeMlc> = object({
    componentId: string(),
    id: optional(string()),
    label: string(),
    active: optional(boolean()),
    dataJson: optional(string()),
})

export const chipTimeMlcSchema = schemaBuilder(schema)
