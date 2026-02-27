import { Describe, array, object, optional, string } from 'superstruct'

import { TableBlockOrg } from '@diia-inhouse/types'

import { tableItemMlcSchema } from '../molecules/tableItemMlc'
import { tableMainHeadingMlcSchema } from '../molecules/tableMainHeadingMlc'
import { tableSecondaryHeadingMlcSchema } from '../molecules/tableSecondaryHeadingMlc'
import { schemaBuilder } from '../utils'

const schema: Describe<TableBlockOrg> = object({
    componentId: optional(string()),
    tableMainHeadingMlc: optional(tableMainHeadingMlcSchema()),
    items: array(tableItemMlcSchema()),
    tableSecondaryHeadingMlc: optional(tableSecondaryHeadingMlcSchema()),
})

export const tableBlockOrgSchema = schemaBuilder(schema)
