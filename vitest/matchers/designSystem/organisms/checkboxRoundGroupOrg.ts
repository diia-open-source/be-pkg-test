import { Describe, array, boolean, object, optional, string } from 'superstruct'

import { CheckboxRoundGroupOrg, CheckboxRoundGroupOrgItem } from '@diia-inhouse/types'

import { checkIconMlcSchema } from '../molecules/checkIconMlc'
import { checkboxRoundMlcSchema } from '../molecules/checkboxRoundMlc'
import { schemaBuilder } from '../utils'

const checkboxRoundGroupOrgItem: Describe<CheckboxRoundGroupOrgItem> = object({
    checkboxRoundMlc: optional(checkboxRoundMlcSchema),
    checkIconMlc: optional(checkIconMlcSchema()),
})

const schema: Describe<CheckboxRoundGroupOrg> = object({
    id: optional(string()),
    title: optional(string()),
    blocker: optional(boolean()),
    condition: optional(string()),
    items: array(checkboxRoundGroupOrgItem),
})

export const checkboxRoundGroupOrgSchema = schemaBuilder(schema)
