import { Describe, array, object, optional, string } from 'superstruct'

import { BtnPrimaryDefaultAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnPrimaryDefaultAtm> = object({
    label: string(),
    state: optional(buttonStateSchema),
    actions: array(buttonActionSchema()),
    action: optional(buttonActionSchema()),
    componentId: optional(string()),
})

export const btnPrimaryDefaultAtmSchema = schemaBuilder(schema)
