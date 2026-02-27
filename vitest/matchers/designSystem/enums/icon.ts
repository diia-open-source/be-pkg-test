import { Describe, enums } from 'superstruct'

import { Icon } from '@diia-inhouse/types'

export const iconSchema: Describe<Icon> = enums(Object.values(Icon))
