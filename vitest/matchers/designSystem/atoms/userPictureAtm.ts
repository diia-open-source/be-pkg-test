import { Describe, boolean, enums, object } from 'superstruct'

import { DefaultImage, UserPictureAtm } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'
import { buttonActionSchema } from './shared/buttonAction'

const schema: Describe<UserPictureAtm> = object({
    defaultImageCode: enums(Object.values(DefaultImage)),
    useDocPhoto: boolean(),
    action: buttonActionSchema(),
})

export const userPictureAtmSchema = schemaBuilder(schema)
