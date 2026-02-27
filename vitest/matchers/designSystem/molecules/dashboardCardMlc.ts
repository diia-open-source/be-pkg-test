import { Describe, enums, object, optional, string } from 'superstruct'

import { DashboardCardMlc, DashboardCardMlcType } from '@diia-inhouse/types'

import { btnSemiLightAtmSchema } from '../atoms/btnSemiLightAtm'
import { buttonActionSchema } from '../atoms/shared/buttonAction'
import { schemaBuilder } from '../utils'

const schema: Describe<DashboardCardMlc> = object({
    componentId: string(),
    icon: optional(string()),
    label: optional(string()),
    amountLarge: optional(string()),
    amountSmall: optional(string()),
    description: optional(string()),
    iconCenter: optional(string()),
    descriptionCenter: optional(string()),
    action: optional(buttonActionSchema()),
    btnSemiLightAtm: optional(btnSemiLightAtmSchema()),
    type: enums(Object.values(DashboardCardMlcType)),
})

export const dashboardCardMlcSchema = schemaBuilder(schema)
