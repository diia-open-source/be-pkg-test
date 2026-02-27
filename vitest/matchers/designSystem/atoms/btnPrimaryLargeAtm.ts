import { Describe, object, optional, string } from 'superstruct'

import { BtnPrimaryLargeAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnPrimaryLargeAtm> = object({
    componentId: optional(string()),
    label: string(),
    state: optional(buttonStateSchema),
    action: optional(buttonActionSchema()),
})

export const btnPrimaryLargeAtmSchema = schemaBuilder(schema)
