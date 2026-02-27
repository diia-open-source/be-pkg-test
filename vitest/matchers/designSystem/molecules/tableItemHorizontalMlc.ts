import { Describe, object, optional, string } from 'superstruct'

import { TableItemHorizontalMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<TableItemHorizontalMlc> = object({
    label: string(),
    supportingValue: optional(string()),
    secondaryLabel: optional(string()),
    value: optional(string()),
    secondaryValue: optional(string()),
    valueImage: optional(string()),
    icon: optional(iconAtmSchema),
    componentId: optional(string()),
})

export const tableItemHorizontalMlcSchema = schemaBuilder(schema)
