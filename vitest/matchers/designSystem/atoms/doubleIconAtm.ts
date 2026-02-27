import { Describe, object, optional, string } from 'superstruct'

import { DoubleIconAtm } from '@diia-inhouse/types'

import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'
import { iconActionSchema } from './shared/iconAction'

const schema: Describe<DoubleIconAtm> = object({
    accessibilityDescription: optional(string()),
    code: iconSchema,
    action: iconActionSchema(),
})

export const doubleIconAtmSchema = schemaBuilder(schema)
