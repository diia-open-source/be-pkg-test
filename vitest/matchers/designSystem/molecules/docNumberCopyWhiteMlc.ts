import { Describe, object, optional, string } from 'superstruct'

import { DocNumberCopyWhiteMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<DocNumberCopyWhiteMlc> = object({
    value: string(),
    label: optional(string()),
    icon: optional(iconAtmSchema),
})

export const docNumberCopyWhiteMlcSchema = schemaBuilder(schema)
