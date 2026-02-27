import { Describe, object, optional, string } from 'superstruct'

import { DocNumberCopyMlc } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<DocNumberCopyMlc> = object({
    value: string(),
    label: optional(string()),
    icon: optional(iconAtmSchema),
    componentId: optional(string()),
})

export const docNumberCopyMlcSchema = schemaBuilder(schema)
