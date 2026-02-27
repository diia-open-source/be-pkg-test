import { Describe, object, optional, string } from 'superstruct'

import { QrCodeMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<QrCodeMlc> = object({
    qrLink: string(),
    componentId: optional(string()),
})

export const qrCodeMlcSchema = schemaBuilder(schema)
