import { Describe, object, optional, string } from 'superstruct'

import { BottomGroupOrg } from '@diia-inhouse/types'

import { btnPlainAtmSchema } from '../atoms/btnPlainAtm'
import { btnPrimaryDefaultAtmSchema } from '../atoms/btnPrimaryDefaultAtm'
import { btnPrimaryLargeAtmSchema } from '../atoms/btnPrimaryLargeAtm'
import { btnStrokeDefaultAtmSchema } from '../atoms/btnStrokeDefaultAtm'
import { btnIconPlainGroupMlcSchema } from '../molecules/btnIconPlainGroupMlc'
import { btnLoadIconPlainGroupMlcSchema } from '../molecules/btnLoadIconPlainGroupMlc'
import { schemaBuilder } from '../utils'
import { checkboxBtnOrgSchema } from './checkboxBtnOrg'

const schema: Describe<BottomGroupOrg> = object({
    btnPrimaryDefaultAtm: optional(btnPrimaryDefaultAtmSchema()),
    btnPlainAtm: optional(btnPlainAtmSchema()),
    checkboxBtnOrg: optional(checkboxBtnOrgSchema()),
    componentId: optional(string()),
    btnIconPlainGroupMlc: optional(btnIconPlainGroupMlcSchema()),
    btnPrimaryLargeAtm: optional(btnPrimaryLargeAtmSchema()),
    btnStrokeDefaultAtm: optional(btnStrokeDefaultAtmSchema()),
    btnLoadIconPlainGroupMlc: optional(btnLoadIconPlainGroupMlcSchema()),
})

export const bottomGroupOrgSchema = schemaBuilder(schema)
