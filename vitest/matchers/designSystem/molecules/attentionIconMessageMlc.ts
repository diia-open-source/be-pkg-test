import { Describe, literal, object, optional, string } from 'superstruct'

import { AttentionIconMessageMlc, BackgroundMode } from '@diia-inhouse/types'

import { smallIconAtmSchema } from '../atoms'
import { schemaBuilder } from '../utils'

const schema: Describe<AttentionIconMessageMlc> = object({
    backgroundMode: optional(literal(BackgroundMode.info)),
    text: string(),
    componentId: optional(string()),
    smallIconAtm: optional(smallIconAtmSchema()),
})

export const attentionIconMessageMlcSchema = schemaBuilder(schema)
