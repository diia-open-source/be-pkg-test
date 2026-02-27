import { Describe, enums, object, optional, string } from 'superstruct'

import { ActionCode, CheckIconMlc, CheckableAtmType } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<CheckIconMlc> = object({
    label: string(),
    icon: enums(Object.values(ActionCode)),
    state: optional(enums(Object.values(CheckableAtmType))),
})

export const checkIconMlcSchema = schemaBuilder(schema)
