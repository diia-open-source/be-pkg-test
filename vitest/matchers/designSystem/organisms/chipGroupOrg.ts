import { Describe, array, object, optional, string } from 'superstruct'

import { ChipGroupOrg, ChipGroupOrgItem } from '@diia-inhouse/types'

import { chipMlcSchema } from '../molecules/chipMlc'
import { chipTimeMlcSchema } from '../molecules/chipTimeMlc'
import { schemaBuilder } from '../utils'

const chipGroupOrgItemSchema: Describe<ChipGroupOrgItem> = object({
    chipMlc: optional(chipMlcSchema()),
    chipTimeMlc: optional(chipTimeMlcSchema()),
})

const schema: Describe<ChipGroupOrg> = object({
    componentId: optional(string()),
    label: optional(string()),
    items: array(chipGroupOrgItemSchema),
    preselectedCode: optional(string()),
})

export const chipGroupOrgSchema = schemaBuilder(schema)
