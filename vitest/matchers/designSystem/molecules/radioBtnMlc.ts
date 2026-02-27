import { Describe, boolean, enums, object, optional, string } from 'superstruct'

import { CheckableAtmType, RadioBtnMlc } from '@diia-inhouse/types'

import { amountAtmSchema } from '../atoms/amountAtm'
import { chipStatusAtmSchema } from '../atoms/chipStatusAtm'
import { buttonActionSchema } from '../atoms/shared/buttonAction'
import { schemaBuilder } from '../utils'

const schema: Describe<RadioBtnMlc> = object({
    id: optional(string()),
    label: string(),
    description: optional(string()),
    action: optional(buttonActionSchema()),
    componentId: optional(string()),
    dataJson: optional(string()),
    amountAtm: optional(amountAtmSchema()),
    chipStatusAtm: optional(chipStatusAtmSchema()),
    logoLeft: optional(string()),
    logoRight: optional(string()),
    isEnabled: optional(boolean()),
    isSelected: optional(boolean()),
    status: optional(string()),
    largeLogoRight: optional(string()),
    state: optional(enums(Object.values(CheckableAtmType))),
})

export const radioBtnMlcSchema = schemaBuilder(schema)
