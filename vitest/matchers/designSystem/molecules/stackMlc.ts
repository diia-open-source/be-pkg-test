import { Describe, number, object } from 'superstruct'

import { StackMlc } from '@diia-inhouse/types'

import { smallIconAtmSchema } from '../atoms/smallIconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<StackMlc> = object({
    amount: number(),
    smallIconAtm: smallIconAtmSchema(),
})

export const stackMlcSchema = schemaBuilder(schema)
