import { Describe, array, object, optional, string } from 'superstruct'

import { BtnLoadIconPlainGroupMlc, BtnLoadIconPlainGroupMlcItem } from '@diia-inhouse/types'

import { btnLoadPlainIconAtmSchema } from '../atoms/btnLoadPlainIconAtm'
import { schemaBuilder } from '../utils'

const btnLoadIconPlainGroupMlcItemSchema: Describe<BtnLoadIconPlainGroupMlcItem> = object({
    btnLoadPlainIconAtm: btnLoadPlainIconAtmSchema(),
})

const schema: Describe<BtnLoadIconPlainGroupMlc> = object({
    componentId: optional(string()),
    items: array(btnLoadIconPlainGroupMlcItemSchema),
})

export const btnLoadIconPlainGroupMlcSchema = schemaBuilder(schema)
