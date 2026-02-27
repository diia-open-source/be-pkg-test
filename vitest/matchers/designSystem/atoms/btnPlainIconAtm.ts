import { Describe, object, optional, string } from 'superstruct'

import { BtnPlainIconAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnPlainIconAtm> = object({
    label: string(),
    state: optional(buttonStateSchema),
    action: optional(buttonActionSchema()),
    icon: iconSchema,
    componentId: optional(string()),
})

export const btnPlainIconAtmSchema = schemaBuilder(schema)
