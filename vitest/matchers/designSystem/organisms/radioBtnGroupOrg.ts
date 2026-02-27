import { Describe, array, boolean, object, optional, string } from 'superstruct'

import { RadioBtnGroupOrg, RadioBtnGroupOrgItem } from '@diia-inhouse/types'

import { btnPlainIconAtmSchema } from '../atoms/btnPlainIconAtm'
import { radioBtnMlcSchema } from '../molecules/radioBtnMlc'
import { schemaBuilder } from '../utils'
import { radioBtnAdditionalInputOrgSchema } from './radioBtnAdditionalInputOrg'

const radioBtnGroupOrgItemSchema: Describe<RadioBtnGroupOrgItem> = object({
    condition: optional(string()),
    radioBtnMlc: optional(radioBtnMlcSchema()),
    radioBtnAdditionalInputOrg: optional(radioBtnAdditionalInputOrgSchema()),
})

const schema: Describe<RadioBtnGroupOrg> = object({
    id: optional(string()),
    blocker: optional(boolean()),
    title: optional(string()),
    condition: optional(string()),
    items: array(radioBtnGroupOrgItemSchema),
    componentId: optional(string()),
    inputCode: optional(string()),
    mandatory: optional(boolean()),
    btnPlainIconAtm: optional(btnPlainIconAtmSchema()),
})

export const radioBtnGroupOrgSchema = schemaBuilder(schema)
