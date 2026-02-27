import { Describe, object, optional, string } from 'superstruct'

import { TitleLabelMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<TitleLabelMlc> = object({
    label: string(),
    componentId: optional(string()),
})

export const titleLabelMlcSchema = schemaBuilder(schema)
