import { Describe, object, optional, string } from 'superstruct'

import { DocHeadingOrg } from '@diia-inhouse/types'

import { docNumberCopyMlcSchema } from '../molecules/docNumberCopyMlc'
import { docNumberCopyWhiteMlcSchema } from '../molecules/docNumberCopyWhiteMlc'
import { headingWithSubtitleWhiteMlcSchema } from '../molecules/headingWithSubtitleWhiteMlc'
import { headingWithSubtitlesMlcSchema } from '../molecules/headingWithSubtitlesMlc'
import { schemaBuilder } from '../utils'

const schema: Describe<DocHeadingOrg> = object({
    componentId: optional(string()),
    headingWithSubtitlesMlc: optional(headingWithSubtitlesMlcSchema()),
    headingWithSubtitleWhiteMlc: optional(headingWithSubtitleWhiteMlcSchema()),
    docNumberCopyMlc: optional(docNumberCopyMlcSchema()),
    docNumberCopyWhiteMlc: optional(docNumberCopyWhiteMlcSchema()),
})

export const docHeadingOrgSchema = schemaBuilder(schema)
