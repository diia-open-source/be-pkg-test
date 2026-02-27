import { Describe, array, object, optional, string } from 'superstruct'

import { InputNumLargeTimeItem, InputNumLargeTimeOrg } from '@diia-inhouse/types'

import { inputNumberLargeAtmSchema } from '../atoms/inputNumberLargeAtm'
import { textLabelMlcSchema } from '../molecules/textLabelMlc'
import { schemaBuilder } from '../utils'

const inputNumLargeTimeItem: Describe<InputNumLargeTimeItem> = object({
    inputNumberLargeAtm: optional(inputNumberLargeAtmSchema()),
})

const schema: Describe<InputNumLargeTimeOrg> = object({
    componentId: string(),
    textLabelMlc: optional(textLabelMlcSchema()),
    items: array(inputNumLargeTimeItem),
})

export const inputNumLargeTimeOrgSchema = schemaBuilder(schema)
