import { Describe, array, object, optional, string } from 'superstruct'

import { GroupFilesAddOrg, GroupFilesAddOrgItem } from '@diia-inhouse/types'

import { btnPlainIconAtmSchema } from '../atoms/btnPlainIconAtm'
import { listItemMlcSchema } from '../molecules/listItemMlc'
import { schemaBuilder } from '../utils'

const groupFilesAddOrgItemSchema: Describe<GroupFilesAddOrgItem> = object({
    listItemMlc: optional(listItemMlcSchema()),
})

const schema: Describe<GroupFilesAddOrg> = object({
    componentId: optional(string()),
    btnPlainIconAtm: optional(btnPlainIconAtmSchema()),
    items: array(groupFilesAddOrgItemSchema),
})

export const groupFilesAddOrgSchema = schemaBuilder(schema)
