import { Describe, enums } from 'superstruct'

import { ButtonState } from '@diia-inhouse/types'

export const buttonStateSchema: Describe<ButtonState> = enums(Object.values(ButtonState))
