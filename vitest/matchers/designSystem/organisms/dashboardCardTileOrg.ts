import { Describe, array, object, optional, string } from 'superstruct'

import { DashboardCardTileOrg, DashboardCardTileOrgItem } from '@diia-inhouse/types'

import { dashboardCardMlcSchema } from '../molecules/dashboardCardMlc'
import { schemaBuilder } from '../utils'

const dashboardCardTileOrgItemSchema: Describe<DashboardCardTileOrgItem> = object({
    dashboardCardMlc: optional(dashboardCardMlcSchema()),
})

const schema: Describe<DashboardCardTileOrg> = object({
    componentId: string(),
    items: array(dashboardCardTileOrgItemSchema),
})

export const dashboardCardTileOrgSchema = schemaBuilder(schema)
