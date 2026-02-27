import { Describe, object, string } from 'superstruct'

import { BtnSemiLightAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnSemiLightAtm> = object({
    componentId: string(),
    label: string(),
    state: buttonStateSchema,
    action: buttonActionSchema(),
})

export const btnSemiLightAtmSchema = schemaBuilder(schema)
