import { Describe, object, optional, string } from 'superstruct'

import { BtnWhiteAdditionalIconAtm } from '@diia-inhouse/types'

import { buttonStateSchema } from '../enums/button'
import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'
import { badgeCounterAtmSchema } from './badgeCounterAtm'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<BtnWhiteAdditionalIconAtm> = object({
    label: optional(string()),
    componentId: optional(string()),
    icon: iconSchema,
    state: optional(buttonStateSchema),
    action: optional(buttonActionSchema()),
    badgeCounterAtm: optional(badgeCounterAtmSchema()),
})

export const btnWhiteAdditionalIconSchema = schemaBuilder(schema)
