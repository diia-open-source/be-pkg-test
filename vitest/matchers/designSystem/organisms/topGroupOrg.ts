import { Describe, object, optional, string } from 'superstruct'

import { TopGroupOrg } from '@diia-inhouse/types'

import { navigationPanelMlcSchema } from '../molecules/navigationPanelMlc'
import { titleGroupMlcSchema } from '../molecules/titleGroupMlc'
import { schemaBuilder } from '../utils'
import { chipTabsOrgSchema } from './chipTabsOrg'

const schema: Describe<TopGroupOrg> = object({
    componentId: optional(string()),
    navigationPanelMlc: optional(navigationPanelMlcSchema()),
    chipTabsOrg: optional(chipTabsOrgSchema()),
    titleGroupMlc: optional(titleGroupMlcSchema()),
})

export const topGroupOrgSchema = schemaBuilder(schema)
