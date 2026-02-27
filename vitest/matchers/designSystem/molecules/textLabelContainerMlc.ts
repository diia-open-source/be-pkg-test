import { Describe, array, object, optional, string } from 'superstruct'

import { TextLabelContainerMlc } from '@diia-inhouse/types'

import { textParameterAtmSchema } from '../atoms/textParameterAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<TextLabelContainerMlc> = object({
    label: optional(string()),
    text: optional(string()),
    parameters: array(textParameterAtmSchema()),
    componentId: optional(string()),
})

export const textLabelContainerMlcSchema = schemaBuilder(schema)
