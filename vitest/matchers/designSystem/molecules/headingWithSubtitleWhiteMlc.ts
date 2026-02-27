import { Describe, array, object, string } from 'superstruct'

import { HeadingWithSubtitleWhiteMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<HeadingWithSubtitleWhiteMlc> = object({
    value: string(),
    subtitles: array(string()),
})

export const headingWithSubtitleWhiteMlcSchema = schemaBuilder(schema)
