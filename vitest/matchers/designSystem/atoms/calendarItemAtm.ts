import { Describe, boolean, object, string } from 'superstruct'

import { CalendarItemAtm } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<CalendarItemAtm> = object({
    label: string(),
    isActive: boolean(),
    isSelected: boolean(),
    isToday: boolean(),
})

export const calendarItemAtmSchema = schemaBuilder(schema)
