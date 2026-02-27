import { Describe, object, optional, string } from 'superstruct'

import { TableMainHeadingMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<TableMainHeadingMlc> = object({
    label: string(),
    icon: optional(iconAtmSchema),
    description: optional(string()),
    componentId: optional(string()),
})

export const tableMainHeadingMlcSchema = schemaBuilder(schema)
