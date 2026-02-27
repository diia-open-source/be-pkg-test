import { Describe, array, boolean, object, optional, string } from 'superstruct'

import { SelectorOrg } from '@diia-inhouse/types'

import { validationAtmSchema } from '../atoms/validationAtm'
import { schemaBuilder } from '../utils'
import { selectorListWidgetOrgSchema } from './selectorListWidgetOrg'

const schema: Describe<SelectorOrg> = object({
    id: optional(string()),
    blocker: optional(boolean()),
    label: string(),
    placeholder: string(),
    hint: optional(string()),
    value: optional(string()),
    selectorListWidgetOrg: optional(selectorListWidgetOrgSchema),
    validation: array(validationAtmSchema()),
    componentId: optional(string()),
    inputCode: optional(string()),
    mandatory: optional(boolean()),
    valueId: optional(string()),
})

export const selectorOrgSchema = schemaBuilder(schema)
