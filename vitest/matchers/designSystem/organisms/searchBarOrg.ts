import { Describe, object, optional, string } from 'superstruct'

import { SearchBarOrg } from '@diia-inhouse/types'

import { btnWhiteAdditionalIconSchema } from '../atoms/btnWhiteAdditionalIconAtm'
import { searchInputMlcSchema } from '../molecules'
import { schemaBuilder } from '../utils'

const schema: Describe<SearchBarOrg> = object({
    componentId: optional(string()),
    searchInputMlc: searchInputMlcSchema(),
    btnWhiteAdditionalIconAtm: optional(btnWhiteAdditionalIconSchema()),
})

export const searchBarOrgSchema = schemaBuilder(schema)
