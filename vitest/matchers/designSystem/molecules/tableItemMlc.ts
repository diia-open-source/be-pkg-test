import { Describe, object, optional } from 'superstruct'

import { TableItemMlc } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'
import { docTableItemHorizontalMlcSchema } from './docTableItemHorizontalMlc'
import { smallEmojiPanelMlcSchema } from './smallEmojiPanelMlc'
import { smallEmojiPanelPlaneMlcSchema } from './smallEmojiPanelPlaneMlc'
import { tableItemHorizontalMlcSchema } from './tableItemHorizontalMlc'
import { tableItemPrimaryMlcSchema } from './tableItemPrimaryMlc'
import { tableItemVerticalMlcSchema } from './tableItemVerticalMlc'

const schema: Describe<TableItemMlc> = object({
    smallEmojiPanelMlc: optional(smallEmojiPanelMlcSchema()),
    tableItemPrimaryMlc: optional(tableItemPrimaryMlcSchema()),
    tableItemHorizontalMlc: optional(tableItemHorizontalMlcSchema()),
    tableItemVerticalMlc: optional(tableItemVerticalMlcSchema()),
    smallEmojiPanelPlaneMlc: optional(smallEmojiPanelPlaneMlcSchema()),
    docTableItemHorizontalMlc: optional(docTableItemHorizontalMlcSchema()),
    docTableItemHorizontalLongerMlc: optional(docTableItemHorizontalMlcSchema()),
})

export const tableItemMlcSchema = schemaBuilder(schema)
