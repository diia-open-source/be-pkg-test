import { Describe, object, optional, string } from 'superstruct'

import { ArticlePicAtm } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<ArticlePicAtm> = object({
    componentId: optional(string()),
    image: string(),
})

export const articlePicAtmSchema = schemaBuilder(schema)
