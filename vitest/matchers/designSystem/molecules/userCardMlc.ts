import { Describe, object, optional, string } from 'superstruct'

import { UserCardMlc } from '@diia-inhouse/types'

import { userPictureAtmSchema } from '../atoms/userPictureAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<UserCardMlc> = object({
    componentId: optional(string()),
    userPictureAtm: optional(userPictureAtmSchema()),
    label: string(),
    description: optional(string()),
})

export const userCardMlcSchema = schemaBuilder(schema)
