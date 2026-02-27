import { Describe, array, object, string } from 'superstruct'

import { ValidationAtm } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<ValidationAtm> = object({
    regexp: string(),
    flags: array(string()),
    errorMessage: string(),
})

export const validationAtmSchema = schemaBuilder(schema)
