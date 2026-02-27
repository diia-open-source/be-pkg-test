import { Describe, array, boolean, number, object, optional, string } from 'superstruct'

import { PaginationListWhiteOrg, PaginationListWhiteOrgItem } from '@diia-inhouse/types'

import { greyTitleAtmSchema } from '../atoms/greyTitleAtm'
import { cardMlcSchema } from '../molecules/cardMlc'
import { listItemMlcSchema } from '../molecules/listItemMlc'

const paginationListWhiteOrgItemSchema: Describe<PaginationListWhiteOrgItem> = object({
    cardMlc: optional(cardMlcSchema()),
    listItemMlc: optional(listItemMlcSchema()),
    greyTitleAtm: optional(greyTitleAtmSchema()),
})

export const paginationListWhiteOrgSchema: Describe<PaginationListWhiteOrg> = object({
    componentId: string(),
    limit: optional(number()),
    items: array(paginationListWhiteOrgItemSchema),
    showDivider: optional(boolean()),
})
