import { Describe, object, optional, string } from 'superstruct'

import { TableItemPrimaryMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<TableItemPrimaryMlc> = object({
    componentId: optional(string()),
    icon: optional(iconAtmSchema),
    label: optional(string()),
    value: string(),
})

export const tableItemPrimaryMlcSchema = schemaBuilder(schema)
