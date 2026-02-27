import { Describe, object, optional, string } from 'superstruct'

import { DocTableItemHorizontalLongerMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<DocTableItemHorizontalLongerMlc> = object({
    label: string(),
    supportingValue: optional(string()),
    secondaryLabel: optional(string()),
    value: string(),
    secondaryValue: optional(string()),
    valueImage: optional(string()),
    icon: optional(iconAtmSchema),
})

export const docTableItemHorizontalLongerMlcSchema = schemaBuilder(schema)
