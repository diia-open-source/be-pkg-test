import { Describe, array, number, object, optional, string } from 'superstruct'

import { TimerMlc, TimerMlcData, TimerMlcExpireLabel, TimerMlcParameter, TimerMlcStateAfterExpiration } from '@diia-inhouse/types'

import { btnLinkAtmSchema } from '../atoms/btnLinkAtm'
import { schemaBuilder } from '../utils'

const timerMlcStateAfterExpiration: Describe<TimerMlcStateAfterExpiration> = object({
    btnLinkAtm: optional(btnLinkAtmSchema()),
})

const timerMlcDataSchema: Describe<TimerMlcData> = object({
    name: string(),
    alt: string(),
    resource: string(),
})

const timerMlcParameterSchema: Describe<TimerMlcParameter> = object({
    type: string(),
    data: optional(timerMlcDataSchema),
})

const timerMlcExpireLabelSchema: Describe<TimerMlcExpireLabel> = object({
    expireLabelFirst: string(),
    expireLabelLast: optional(string()),
    timer: number(),
    parameters: array(timerMlcParameterSchema),
})

const schema: Describe<TimerMlc> = object({
    componentId: optional(string()),
    expireLabel: optional(timerMlcExpireLabelSchema),
    stateAfterExpiration: optional(timerMlcStateAfterExpiration),
})

export const timerMlcSchema = schemaBuilder(schema)
