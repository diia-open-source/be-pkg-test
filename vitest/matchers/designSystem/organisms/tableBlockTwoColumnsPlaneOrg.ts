import { Describe, array, object, optional, string } from 'superstruct'

import { TableBlockTwoColumnsPlaneOrg } from '@diia-inhouse/types'

import { headingWithSubtitlesMlcSchema } from '../molecules/headingWithSubtitlesMlc'
import { tableItemMlcSchema } from '../molecules/tableItemMlc'
import { schemaBuilder } from '../utils'

const schema: Describe<TableBlockTwoColumnsPlaneOrg> = object({
    photo: optional(string()),
    items: array(tableItemMlcSchema()),
    componentId: optional(string()),
    headingWithSubtitlesMlc: optional(headingWithSubtitlesMlcSchema()),
})

export const tableBlockTwoColumnsPlaneOrgSchema = schemaBuilder(schema)
