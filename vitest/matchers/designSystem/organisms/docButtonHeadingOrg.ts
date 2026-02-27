import { Describe, object, optional, string } from 'superstruct'

import { DocButtonHeadingOrg } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { docNumberCopyMlcSchema } from '../molecules/docNumberCopyMlc'
import { docNumberCopyWhiteMlcSchema } from '../molecules/docNumberCopyWhiteMlc'
import { headingWithSubtitleWhiteMlcSchema } from '../molecules/headingWithSubtitleWhiteMlc'
import { headingWithSubtitlesMlcSchema } from '../molecules/headingWithSubtitlesMlc'
import { stackMlcSchema } from '../molecules/stackMlc'

export const docButtonHeadingOrgSchema: Describe<DocButtonHeadingOrg> = object({
    headingWithSubtitlesMlc: optional(headingWithSubtitlesMlcSchema()),
    docNumberCopyMlc: optional(docNumberCopyMlcSchema()),
    headingWithSubtitleWhiteMlc: optional(headingWithSubtitleWhiteMlcSchema()),
    docNumberCopyWhiteMlc: optional(docNumberCopyWhiteMlcSchema()),
    stackMlc: optional(stackMlcSchema()),
    iconAtm: optional(iconAtmSchema),
    componentId: optional(string()),
})
