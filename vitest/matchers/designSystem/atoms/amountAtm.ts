import { Describe, enums, object, string } from 'superstruct'

import { AmountAtm, AmountAtmColour } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<AmountAtm> = object({
    componentId: string(),
    colour: enums(Object.values(AmountAtmColour)),
    value: string(),
})

export const amountAtmSchema = schemaBuilder(schema)
