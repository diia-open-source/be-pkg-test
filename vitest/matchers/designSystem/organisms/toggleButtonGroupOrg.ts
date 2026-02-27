import { Describe, array, object, optional, string } from 'superstruct'

import { ToggleButtonGroupItem, ToggleButtonGroupOrg } from '@diia-inhouse/types'

import { btnToggleMlcSchema } from '../molecules/btnToggleMlc'
import { schemaBuilder } from '../utils'

const toggleButtonGroupItemSchema: Describe<ToggleButtonGroupItem> = object({
    btnToggleMlc: optional(btnToggleMlcSchema()),
})

const schema: Describe<ToggleButtonGroupOrg> = object({
    preselected: string(),
    componentId: optional(string()),
    items: array(toggleButtonGroupItemSchema),
})

export const toggleButtonGroupOrgSchema = schemaBuilder(schema)
