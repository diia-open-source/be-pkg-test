import { Describe, object, optional, string } from 'superstruct'

import { BtnPrimaryWideAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnPrimaryWideAtm> = object({
    componentId: string(),
    label: string(),
    state: optional(buttonStateSchema),
    action: optional(buttonActionSchema()),
})

export const btnPrimaryWideAtmSchema = schemaBuilder(schema)
