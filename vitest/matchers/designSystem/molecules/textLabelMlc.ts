import { Describe, array, number, object, optional, string } from 'superstruct'

import { TextLabelMlc, TextLabelMlcExpireLabel } from '@diia-inhouse/types'

import { textParameterAtmSchema } from '../atoms/textParameterAtm'
import { schemaBuilder } from '../utils'

const textLabelMlcExpireLabelSchema: Describe<TextLabelMlcExpireLabel> = object({
    expireLabelFirst: string(),
    expireLabelLast: optional(string()),
    timer: number(),
    textAfterExpiration: string(),
})

const schema: Describe<TextLabelMlc> = object({
    label: optional(string()),
    text: optional(string()),
    parameters: array(textParameterAtmSchema()),
    componentId: optional(string()),
    expireLabel: optional(textLabelMlcExpireLabelSchema),
})

export const textLabelMlcSchema = schemaBuilder(schema)
