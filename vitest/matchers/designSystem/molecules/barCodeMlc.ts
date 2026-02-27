import { Describe, object, optional, string } from 'superstruct'

import { BarCodeMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<BarCodeMlc> = object({
    barCode: string(),
    componentId: optional(string()),
})

export const barCodeMlcSchema = schemaBuilder(schema)
