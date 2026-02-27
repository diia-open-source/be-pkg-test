import { Describe, array, object, optional } from 'superstruct'

import { BtnIconRoundedGroupOrg, BtnIconRoundedGroupOrgItem } from '@diia-inhouse/types'

import { btnIconRoundedMlcSchema } from '../molecules/btnIconRoundedMlc'
import { schemaBuilder } from '../utils'

const btnIconRoundedGroupOrgItemSchema: Describe<BtnIconRoundedGroupOrgItem> = object({
    btnIconRoundedMlc: optional(btnIconRoundedMlcSchema()),
})

const schema: Describe<BtnIconRoundedGroupOrg> = object({
    items: array(btnIconRoundedGroupOrgItemSchema),
})

export const btnIconRoundedGroupOrgSchema = schemaBuilder(schema)
