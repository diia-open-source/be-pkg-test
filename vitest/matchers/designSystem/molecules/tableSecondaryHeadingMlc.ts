import { Describe, object, optional, string } from 'superstruct'

import { TableSecondaryHeadingMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<TableSecondaryHeadingMlc> = object({
    label: string(),
    icon: optional(iconAtmSchema),
    description: optional(string()),
})

export const tableSecondaryHeadingMlcSchema = schemaBuilder(schema)
