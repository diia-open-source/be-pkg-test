import { Describe, enums, object, optional, string } from 'superstruct'

import { ChipStatusAtm, ChipStatusAtmType } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<ChipStatusAtm> = object({
    componentId: optional(string()),
    code: string(),
    name: string(),
    type: enums(Object.values(ChipStatusAtmType)),
})

export const chipStatusAtmSchema = schemaBuilder(schema)
