import { Describe, number, object } from 'superstruct'

import { BadgeCounterAtm } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<BadgeCounterAtm> = object({
    count: number(),
})

export const badgeCounterAtmSchema = schemaBuilder(schema)
