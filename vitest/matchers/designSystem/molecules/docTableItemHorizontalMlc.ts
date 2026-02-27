import { Describe, object, optional, string } from 'superstruct'

import { DocTableItemHorizontalMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<DocTableItemHorizontalMlc> = object({
    label: string(),
    supportingValue: optional(string()),
    secondaryLabel: optional(string()),
    value: string(),
    secondaryValue: optional(string()),
    valueImage: optional(string()),
    icon: optional(iconAtmSchema),
    componentId: optional(string()),
})

export const docTableItemHorizontalMlcSchema = schemaBuilder(schema)
