import { Describe, number, object, optional, string } from 'superstruct'

import { FileUploadGroupOrg } from '@diia-inhouse/types'

import { btnPlainIconAtmSchema } from '../atoms/btnPlainIconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<FileUploadGroupOrg> = object({
    componentId: optional(string()),
    title: optional(string()),
    description: optional(string()),
    maxCount: optional(number()),
    filesType: string(),
    btnPlainIconAtm: optional(btnPlainIconAtmSchema()),
})

export const fileUploadGroupOrgSchema = schemaBuilder(schema)
