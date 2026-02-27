import { Describe, object, optional, string } from 'superstruct'

import { LargeIconAtm } from '@diia-inhouse/types'

import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'
import { iconActionSchema } from './shared/iconAction'

const schema: Describe<LargeIconAtm> = object({
    code: iconSchema,
    accessibilityDescription: optional(string()),
    action: iconActionSchema(),
    componentId: optional(string()),
})

export const largeIconAtmSchema = schemaBuilder(schema)
