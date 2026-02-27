import { Describe, object, optional, string } from 'superstruct'

import { SearchInputMlc, SearchInputMlcIcon } from '@diia-inhouse/types'

import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'

const searchInputMlcIconSchema: Describe<SearchInputMlcIcon> = object({
    code: iconSchema,
})

const schema: Describe<SearchInputMlc> = object({
    componentId: string(),
    label: string(),
    iconLeft: optional(searchInputMlcIconSchema),
    iconRight: optional(searchInputMlcIconSchema),
})

export const searchInputMlcSchema = schemaBuilder(schema)
