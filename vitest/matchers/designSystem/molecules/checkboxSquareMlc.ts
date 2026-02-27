import { Describe, array, boolean, object, optional, string } from 'superstruct'

import { CheckboxSquareMlc, CheckboxSquareMlcOption } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const checkboxSquareMlcOption: Describe<CheckboxSquareMlcOption> = object({
    id: string(),
    isSelected: boolean(),
})

const schema: Describe<CheckboxSquareMlc> = object({
    label: string(),
    blocker: optional(boolean()),
    id: optional(string()),
    isSelected: optional(boolean()),
    isEnabled: optional(boolean()),
    componentId: optional(string()),
    options: array(checkboxSquareMlcOption),
})

export const checkboxSquareMlcSchema = schemaBuilder(schema)
