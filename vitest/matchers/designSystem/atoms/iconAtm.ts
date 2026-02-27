import { Describe, object, optional, string } from 'superstruct'

import { IconAtm } from '@diia-inhouse/types'

import { iconActionSchema } from './shared/iconAction'

export const iconAtmSchema: Describe<IconAtm> = object({
    componentId: optional(string()),
    code: string(),
    accessibilityDescription: optional(string()),
    action: optional(iconActionSchema()),
})
