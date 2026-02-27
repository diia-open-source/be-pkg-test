import { Describe, array, object, optional } from 'superstruct'

import { VerticalCardCarouselOrg, VerticalCardCarouselOrgItem } from '@diia-inhouse/types'

import { verticalCardMlcSchema } from '../molecules/verticalCardMlc'
import { schemaBuilder } from '../utils'

const verticalCardCarouselOrgItem: Describe<VerticalCardCarouselOrgItem> = object({
    verticalCardMlc: optional(verticalCardMlcSchema()),
})

const schema: Describe<VerticalCardCarouselOrg> = object({
    items: array(verticalCardCarouselOrgItem),
})

export const verticalCardCarouselOrgSchema = schemaBuilder(schema)
