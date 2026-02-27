import { Describe, object, optional, string } from 'superstruct'

import { CalendarItemOrg } from '@diia-inhouse/types'

import { calendarItemAtmSchema } from '../atoms/calendarItemAtm'
import { schemaBuilder } from '../utils'
import { chipGroupOrgSchema } from './chipGroupOrg'

const schema: Describe<CalendarItemOrg> = object({
    componentId: string(),
    date: string(),
    calendarItemAtm: optional(calendarItemAtmSchema()),
    chipGroupOrg: optional(chipGroupOrgSchema()),
})

export const calendarItemOrgSchema = schemaBuilder(schema)
