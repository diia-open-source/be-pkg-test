import { Describe, array, object, optional } from 'superstruct'

import { SmallNotificationCarouselOrg, SmallNotificationCarouselOrgItem } from '@diia-inhouse/types'

import { dotNavigationAtmSchema } from '../atoms/dotNavigationAtm'
import { iconCardMlcSchema } from '../molecules/iconCardMlc'
import { smallNotificationMlcSchema } from '../molecules/smallNotificationMlc'
import { schemaBuilder } from '../utils'

const smallNotificationCarouselOrgItemSchema: Describe<SmallNotificationCarouselOrgItem> = object({
    smallNotificationMlc: optional(smallNotificationMlcSchema()),
    iconCardMlc: optional(iconCardMlcSchema()),
})

const schema: Describe<SmallNotificationCarouselOrg> = object({
    dotNavigationAtm: optional(dotNavigationAtmSchema()),
    items: array(smallNotificationCarouselOrgItemSchema),
})

export const smallNotificationCarouselOrgSchema = schemaBuilder(schema)
