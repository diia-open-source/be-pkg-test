import { Describe, array, boolean, object, optional, string } from 'superstruct'

import { TableBlockAccordionOrg } from '@diia-inhouse/types'

import { tableItemMlcSchema } from '../molecules/tableItemMlc'
import { schemaBuilder } from '../utils'

const schema: Describe<TableBlockAccordionOrg> = object({
    componentId: optional(string()),
    heading: string(),
    isOpen: boolean(),
    items: array(tableItemMlcSchema()),
})

export const tableBlockAccordionOrgSchema = schemaBuilder(schema)
