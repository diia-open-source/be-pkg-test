import { Describe, array, object, optional, string } from 'superstruct'

import { TableItemHorizontalLargeMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { simpleIconAtmSchema } from '../atoms/simpleIconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<TableItemHorizontalLargeMlc> = object({
    label: string(),
    supportingValue: optional(string()),
    secondaryLabel: optional(string()),
    value: optional(string()),
    secondaryValue: optional(string()),
    valueImage: optional(string()),
    icon: optional(iconAtmSchema),
    componentId: optional(string()),
    valueIcons: array(simpleIconAtmSchema()),
    valueImages: array(string()),
})

export const tableItemHorizontalLargeMlcSchema = schemaBuilder(schema)
