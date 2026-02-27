import { Describe, object, optional, string } from 'superstruct'

import { MediaTitleOrg } from '@diia-inhouse/types'

import { btnPlainIconAtmSchema } from '../atoms/btnPlainIconAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<MediaTitleOrg> = object({
    secondaryLabel: string(),
    title: string(),
    btnPlainIconAtm: optional(btnPlainIconAtmSchema()),
})

export const mediaTitleOrgSchema = schemaBuilder(schema)
