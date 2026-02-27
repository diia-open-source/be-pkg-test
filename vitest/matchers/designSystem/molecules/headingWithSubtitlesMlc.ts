import { Describe, array, object, optional, string } from 'superstruct'

import { HeadingWithSubtitlesMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<HeadingWithSubtitlesMlc> = object({
    value: string(),
    subtitles: array(string()),
    componentId: optional(string()),
})

export const headingWithSubtitlesMlcSchema = schemaBuilder(schema)
