import { Describe, object, optional, string } from 'superstruct'

import { ListItemMlc, ListItemMlcIcon } from '@diia-inhouse/types'

import { amountAtmSchema } from '../atoms/amountAtm'
import { chipStatusAtmSchema } from '../atoms/chipStatusAtm'
import { buttonActionSchema } from '../atoms/shared/buttonAction'
import { buttonStateSchema } from '../enums/button'
import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'

const listItemMlcIconSchema: Describe<ListItemMlcIcon> = object({
    code: iconSchema,
})

const schema: Describe<ListItemMlc> = object({
    id: optional(string()),
    label: string(),
    description: optional(string()),
    logoLeft: optional(string()),
    action: optional(buttonActionSchema()),
    state: optional(buttonStateSchema),
    componentId: optional(string()),
    dataJson: optional(string()),
    amountAtm: optional(amountAtmSchema()),
    chipStatusAtm: optional(chipStatusAtmSchema()),
    iconLeft: optional(listItemMlcIconSchema),
    iconRight: optional(listItemMlcIconSchema),
    leftLogoLink: optional(string()),
})

export const listItemMlcSchema = schemaBuilder(schema)
