import { Describe, object, optional, string } from 'superstruct'

import { ListWidgetItemMlc, ListWidgetItemMlcIcon } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'

const listWidgetItemMlcIconSchema: Describe<ListWidgetItemMlcIcon> = object({
    code: iconSchema,
})

const schema: Describe<ListWidgetItemMlc> = object({
    componentId: string(),
    label: string(),
    description: optional(string()),
    iconLeft: optional(listWidgetItemMlcIconSchema),
    iconRight: optional(listWidgetItemMlcIconSchema),
    state: optional(buttonStateSchema),
    dataJson: optional(string()),
    id: string(),
})

export const listWidgetItemMlcSchema = schemaBuilder(schema)
