import { Describe, object, optional, string } from 'superstruct'

import { BlackCardMlc } from '@diia-inhouse/types'

import { doubleIconAtmSchema } from '../atoms/doubleIconAtm'
import { iconAtmSchema } from '../atoms/iconAtm'
import { buttonActionSchema } from '../atoms/shared/buttonAction'
import { smallIconAtmSchema } from '../atoms/smallIconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<BlackCardMlc> = object({
    smallIconAtm: optional(smallIconAtmSchema()),
    iconAtm: optional(iconAtmSchema),
    doubleIconAtm: optional(doubleIconAtmSchema()),
    title: string(),
    label: string(),
    action: buttonActionSchema(),
})

export const blackCardMlcSchema = schemaBuilder(schema)
