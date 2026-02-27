import { Describe, object, optional, string } from 'superstruct'

import { BtnStrokeAdditionalAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnStrokeAdditionalAtm> = object({
    label: string(),
    componentId: optional(string()),
    state: optional(buttonStateSchema),
    action: optional(buttonActionSchema()),
})

export const btnStrokeAdditionalAtmSchema = schemaBuilder(schema)
