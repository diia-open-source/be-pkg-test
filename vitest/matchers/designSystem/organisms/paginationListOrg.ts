import { Describe, array, number, object, optional, string } from 'superstruct'

import { PaginationListOrg, PaginationListOrgItem } from '@diia-inhouse/types'

import { greyTitleAtmSchema } from '../atoms/greyTitleAtm'
import { cardMlcSchema } from '../molecules/cardMlc'
import { listItemMlcSchema } from '../molecules/listItemMlc'

const paginationListOrgItem: Describe<PaginationListOrgItem> = object({
    cardMlc: optional(cardMlcSchema()),
    listItemMlc: optional(listItemMlcSchema()),
    greyTitleAtm: optional(greyTitleAtmSchema()),
})

export const paginationListOrgSchema: Describe<PaginationListOrg> = object({
    componentId: string(),
    limit: optional(number()),
    items: array(paginationListOrgItem),
})
