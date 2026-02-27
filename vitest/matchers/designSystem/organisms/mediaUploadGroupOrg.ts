import { Describe, number, object, optional, string } from 'superstruct'

import { MediaUploadGroupOrg } from '@diia-inhouse/types'

import { btnPlainIconAtmSchema } from '../atoms/btnPlainIconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<MediaUploadGroupOrg> = object({
    title: optional(string()),
    description: optional(string()),
    maxCount: optional(number()),
    btnPlainIconAtm: optional(btnPlainIconAtmSchema()),
    componentId: string(),
})

export const mediaUploadGroupOrgSchema = schemaBuilder(schema)
