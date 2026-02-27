import { Describe, object, optional, string } from 'superstruct'

import { BtnPlainAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnPlainAtm> = object({
    label: string(),
    state: optional(buttonStateSchema),
    action: optional(buttonActionSchema()),
    componentId: string(),
})

export const btnPlainAtmSchema = schemaBuilder(schema)
