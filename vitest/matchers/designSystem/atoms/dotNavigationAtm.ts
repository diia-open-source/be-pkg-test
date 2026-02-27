import { Describe, number, object } from 'superstruct'

import { DotNavigationAtm } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<DotNavigationAtm> = object({
    count: number(),
})

export const dotNavigationAtmSchema = schemaBuilder(schema)
