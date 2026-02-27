import { Describe, object, optional, string } from 'superstruct'

import { WhiteCardMlc } from '@diia-inhouse/types'

import { doubleIconAtmSchema } from '../atoms/doubleIconAtm'
import { iconAtmSchema } from '../atoms/iconAtm'
import { largeIconAtmSchema } from '../atoms/largeIconAtm'
import { buttonActionSchema } from '../atoms/shared/buttonAction'
import { smallIconAtmSchema } from '../atoms/smallIconAtm'

export const whiteCardMlcSchema: Describe<WhiteCardMlc> = object({
    smallIconAtm: optional(smallIconAtmSchema()),
    iconAtm: optional(iconAtmSchema),
    doubleIconAtm: optional(doubleIconAtmSchema()),
    largeIconAtm: optional(largeIconAtmSchema()),
    title: optional(string()),
    label: string(),
    action: optional(buttonActionSchema()),
})
