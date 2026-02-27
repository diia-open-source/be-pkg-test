import { Describe, array, object, optional, string } from 'superstruct'

import { TableBlockTwoColumnsOrg } from '@diia-inhouse/types'

import { headingWithSubtitlesMlcSchema } from '../molecules/headingWithSubtitlesMlc'
import { tableItemMlcSchema } from '../molecules/tableItemMlc'
import { schemaBuilder } from '../utils'

const schema: Describe<TableBlockTwoColumnsOrg> = object({
    headingWithSubtitlesMlc: optional(headingWithSubtitlesMlcSchema()),
    photo: optional(string()),
    items: array(tableItemMlcSchema()),
})

export const tableBlockTwoColumnsOrgSchema = schemaBuilder(schema)
