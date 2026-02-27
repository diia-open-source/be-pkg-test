import { Describe, array, object, optional, string } from 'superstruct'

import { AttentionMessageMlc } from '@diia-inhouse/types'

import { smallIconAtmSchema } from '../atoms'
import { textParameterAtmSchema } from '../atoms/textParameterAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<AttentionMessageMlc> = object({
    icon: string(),
    componentId: optional(string()),
    text: optional(string()),
    title: optional(string()),
    parameters: array(textParameterAtmSchema()),
    smallIconAtm: optional(smallIconAtmSchema()),
})

export const attentionMessageMlcSchema = schemaBuilder(schema)
