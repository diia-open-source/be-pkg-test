import { Describe, array, object, optional, string } from 'superstruct'

import { BtnIconPlainGroupMlc, BtnIconPlainGroupMlcItem } from '@diia-inhouse/types'

import { btnPlainIconAtmSchema } from '../atoms/btnPlainIconAtm'
import { schemaBuilder } from '../utils'

const btnIconPlainGroupMlcItemSchema: Describe<BtnIconPlainGroupMlcItem> = object({
    btnPlainIconAtm: optional(btnPlainIconAtmSchema()),
})

const schema: Describe<BtnIconPlainGroupMlc> = object({
    componentId: optional(string()),
    items: array(btnIconPlainGroupMlcItemSchema),
})

export const btnIconPlainGroupMlcSchema = schemaBuilder(schema)
