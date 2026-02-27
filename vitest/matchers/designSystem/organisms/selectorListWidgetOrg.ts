import { Describe, array, object, optional, string } from 'superstruct'

import { SelectorListWidgetOrg, SelectorListWidgetOrgItem } from '@diia-inhouse/types'

import { listItemMlcSchema } from '../molecules/listItemMlc'
import { listWidgetItemMlcSchema } from '../molecules/listWidgetItemMlc'

const selectorListWidgetOrgItemSchema: Describe<SelectorListWidgetOrgItem> = object({
    listItemMlc: optional(listItemMlcSchema()),
    listWidgetItemMlc: optional(listWidgetItemMlcSchema()),
})

export const selectorListWidgetOrgSchema: Describe<SelectorListWidgetOrg> = object({
    items: array(selectorListWidgetOrgItemSchema),
    componentId: optional(string()),
})
