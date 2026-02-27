import { Describe, array, object, optional, string } from 'superstruct'

import { InputNumberLargeMlc, InputNumberLargeMlcItem } from '@diia-inhouse/types'

import { inputNumberLargeAtmSchema } from '../atoms/inputNumberLargeAtm'
import { schemaBuilder } from '../utils'

const inputNumberLargeMlcItemSchema: Describe<InputNumberLargeMlcItem> = object({
    inputNumberLargeAtm: optional(inputNumberLargeAtmSchema()),
})

const schema: Describe<InputNumberLargeMlc> = object({
    componentId: optional(string()),
    items: array(inputNumberLargeMlcItemSchema),
})

export const inputNumberLargeMlcSchema = schemaBuilder(schema)
