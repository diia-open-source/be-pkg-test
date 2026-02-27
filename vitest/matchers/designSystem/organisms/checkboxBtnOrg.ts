import { Describe, array, object, optional, string } from 'superstruct'

import { CheckboxBtnOrg, CheckboxBtnOrgItem } from '@diia-inhouse/types'

import { btnPrimaryDefaultAtmSchema } from '../atoms/btnPrimaryDefaultAtm'
import { btnPrimaryWideAtmSchema } from '../atoms/btnPrimaryWideAtm'
import { checkboxSquareMlcSchema } from '../molecules/checkboxSquareMlc'
import { schemaBuilder } from '../utils'

const checkboxBtnOrgItemSchema: Describe<CheckboxBtnOrgItem> = object({
    checkboxSquareMlc: optional(checkboxSquareMlcSchema()),
})

const schema: Describe<CheckboxBtnOrg> = object({
    items: array(checkboxBtnOrgItemSchema),
    componentId: optional(string()),
    btnPrimaryDefaultAtm: optional(btnPrimaryDefaultAtmSchema()),
    btnPrimaryWideAtm: optional(btnPrimaryWideAtmSchema()),
})

export const checkboxBtnOrgSchema = schemaBuilder(schema)
