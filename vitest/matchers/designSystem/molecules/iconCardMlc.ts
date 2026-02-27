import { Describe, object, string } from 'superstruct'

import { IconCardMlc } from '@diia-inhouse/types'

import { buttonActionSchema } from '../atoms/shared/buttonAction'
import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'

const schema: Describe<IconCardMlc> = object({
    label: string(),
    iconLeft: iconSchema,
    action: buttonActionSchema(),
})

export const iconCardMlcSchema = schemaBuilder(schema)
