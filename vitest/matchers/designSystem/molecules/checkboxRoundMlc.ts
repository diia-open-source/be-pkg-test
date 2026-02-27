import { Describe, enums, object, optional, string } from 'superstruct'

import { CheckableAtmType, CheckboxRoundMlc } from '@diia-inhouse/types'

export const checkboxRoundMlcSchema: Describe<CheckboxRoundMlc> = object({
    label: string(),
    id: optional(string()),
    description: optional(string()),
    status: optional(string()),
    state: enums(Object.values(CheckableAtmType)),
})
