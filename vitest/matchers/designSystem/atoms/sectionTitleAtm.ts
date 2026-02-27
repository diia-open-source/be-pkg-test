import { Describe, object, string } from 'superstruct'

import { SectionTitleAtm } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<SectionTitleAtm> = object({
    label: string(),
})

export const sectionTitleAtmSchema = schemaBuilder(schema)
