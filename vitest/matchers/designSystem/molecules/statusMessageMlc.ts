import { Describe, array, object, optional, string } from 'superstruct'

import { StatusMessageMlc } from '@diia-inhouse/types'

import { textParameterAtmSchema } from '../atoms/textParameterAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<StatusMessageMlc> = object({
    componentId: optional(string()),
    title: string(),
    icon: string(),
    text: string(),
    parameters: array(textParameterAtmSchema()),
})

export const statusMessageMlcSchema = schemaBuilder(schema)
