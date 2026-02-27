import { Describe, array, object, optional, string } from 'superstruct'

import { RadioBtnWithAltOrg, RadioBtnWithAltOrgItem } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'
import { radioBtnGroupOrgSchema } from './radioBtnGroupOrg'

const radioBtnWithAltOrgItemSchema: Describe<RadioBtnWithAltOrgItem> = object({
    radioBtnGroupOrg: optional(radioBtnGroupOrgSchema()),
})

const schema: Describe<RadioBtnWithAltOrg> = object({
    componentId: string(),
    items: array(radioBtnWithAltOrgItemSchema),
})

export const radioBtnWithAltOrgSchema = schemaBuilder(schema)
