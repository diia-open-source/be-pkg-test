import { Describe, array, object, optional, string } from 'superstruct'

import { ListItemGroupOrg } from '@diia-inhouse/types'

import { listItemMlcSchema } from '../molecules/listItemMlc'

export const listItemGroupOrgSchema: Describe<ListItemGroupOrg> = object({
    title: optional(string()),
    componentId: optional(string()),
    items: array(listItemMlcSchema()),
})
