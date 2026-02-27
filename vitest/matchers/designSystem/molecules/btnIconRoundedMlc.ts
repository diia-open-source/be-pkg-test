import { Describe, object, optional, string } from 'superstruct'

import { BtnIconRoundedMlc } from '@diia-inhouse/types'

import { buttonActionSchema } from '../atoms/shared/buttonAction'
import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'

const schema: Describe<BtnIconRoundedMlc> = object({
    icon: iconSchema,
    label: optional(string()),
    action: buttonActionSchema(),
})

export const btnIconRoundedMlcSchema = schemaBuilder(schema)
