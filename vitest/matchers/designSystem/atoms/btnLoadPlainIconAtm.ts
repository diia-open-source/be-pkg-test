import { Describe, object, optional, string } from 'superstruct'

import { BtnLoadPlainIconAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnLoadPlainIconAtm> = object({
    componentId: optional(string()),
    id: optional(string()),
    label: string(),
    state: optional(buttonStateSchema),
    action: optional(buttonActionSchema()),
    icon: iconSchema,
})

export const btnLoadPlainIconAtmSchema = schemaBuilder(schema)
