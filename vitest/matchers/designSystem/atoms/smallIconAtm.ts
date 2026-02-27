import { Describe, object, optional, string } from 'superstruct'

import { SmallIconAtm } from '@diia-inhouse/types'

import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'
import { iconActionSchema } from './shared/iconAction'

const schema: Describe<SmallIconAtm> = object({
    code: iconSchema,
    accessibilityDescription: optional(string()),
    action: optional(iconActionSchema()),
    componentId: optional(string()),
})

export const smallIconAtmSchema = schemaBuilder(schema)
