import { Describe, array, object, optional, string } from 'superstruct'

import { StubMessageMlc } from '@diia-inhouse/types'

import { btnStrokeAdditionalAtmSchema } from '../atoms/btnStrokeAdditionalAtm'
import { textParameterAtmSchema } from '../atoms/textParameterAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<StubMessageMlc> = object({
    icon: string(),
    title: string(),
    description: optional(string()),
    parameters: array(textParameterAtmSchema()),
    btnStrokeAdditionalAtm: optional(btnStrokeAdditionalAtmSchema()),
    componentId: optional(string()),
})

export const stubMessageMlcSchema = schemaBuilder(schema)
