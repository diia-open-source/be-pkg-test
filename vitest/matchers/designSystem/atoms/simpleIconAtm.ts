import { Describe, enums, object, string } from 'superstruct'

import { ActionCode, SimpleIconAtm } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<SimpleIconAtm> = object({
    description: string(),
    code: enums(Object.values(ActionCode)),
})

export const simpleIconAtmSchema = schemaBuilder(schema)
