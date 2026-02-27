import { Describe, object, optional, string } from 'superstruct'

import { BtnStrokeDefaultAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnStrokeDefaultAtm> = object({
    label: string(),
    state: optional(buttonStateSchema),
    action: optional(buttonActionSchema()),
    componentId: optional(string()),
})

export const btnStrokeDefaultAtmSchema = schemaBuilder(schema)
