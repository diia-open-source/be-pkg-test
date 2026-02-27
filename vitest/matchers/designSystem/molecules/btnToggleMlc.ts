import { Describe, object, optional, string } from 'superstruct'

import { BtnToggleMlc, NotSelected, Selected } from '@diia-inhouse/types'

import { buttonActionSchema } from '../atoms/shared/buttonAction'
import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'

const selectedSchema: Describe<Selected> = object({
    icon: iconSchema,
    action: optional(buttonActionSchema()),
})

const notSelectedSchema: Describe<NotSelected> = object({
    icon: iconSchema,
})

const schema: Describe<BtnToggleMlc> = object({
    code: string(),
    label: string(),
    componentId: optional(string()),
    selected: selectedSchema,
    notSelected: notSelectedSchema,
})

export const btnToggleMlcSchema = schemaBuilder(schema)
