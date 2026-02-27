import { Describe, array, number, object, optional, string } from 'superstruct'

import { ChipTabsOrg, ChipTabsOrgItem } from '@diia-inhouse/types'

import { chipMlcSchema } from '../molecules/chipMlc'
import { schemaBuilder } from '../utils'

const chipTabsOrgItem: Describe<ChipTabsOrgItem> = object({
    chipMlc: optional(chipMlcSchema()),
    code: optional(string()),
    label: optional(string()),
    count: optional(number()),
})

const schema: Describe<ChipTabsOrg> = object({
    label: optional(string()),
    preselectedCode: string(),
    componentId: optional(string()),
    items: array(chipTabsOrgItem),
})

export const chipTabsOrgSchema = schemaBuilder(schema)
