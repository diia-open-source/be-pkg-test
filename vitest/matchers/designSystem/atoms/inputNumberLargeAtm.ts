import { Describe, object, optional, string } from 'superstruct'

import { InputNumberLargeAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { schemaBuilder } from '../utils'

const schema: Describe<InputNumberLargeAtm> = object({
    placeholder: string(),
    componentId: optional(string()),
    state: optional(buttonStateSchema),
    value: optional(string()),
})

export const inputNumberLargeAtmSchema = schemaBuilder(schema)
