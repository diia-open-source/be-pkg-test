import { Describe, array, object, optional } from 'superstruct'

import { HalvedCardCarouselItem, HalvedCardCarouselOrg } from '@diia-inhouse/types'

import { dotNavigationAtmSchema } from '../atoms/dotNavigationAtm'
import { halvedCardMlcSchema } from '../molecules/halvedCardMlc'
import { iconCardMlcSchema } from '../molecules/iconCardMlc'
import { schemaBuilder } from '../utils'

const halvedCardCarouselItemSchema: Describe<HalvedCardCarouselItem> = object({
    halvedCardMlc: optional(halvedCardMlcSchema()),
    iconCardMlc: optional(iconCardMlcSchema()),
})

const schema: Describe<HalvedCardCarouselOrg> = object({
    dotNavigationAtm: optional(dotNavigationAtmSchema()),
    items: array(halvedCardCarouselItemSchema),
})

export const halvedCardCarouselOrgSchema = schemaBuilder(schema)
