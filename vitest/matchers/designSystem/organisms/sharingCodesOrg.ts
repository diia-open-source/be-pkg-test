import { Describe, number, object, optional, string } from 'superstruct'

import { SharingCodesOrg, SharingCodesOrgExpireLabel } from '@diia-inhouse/types'

import { btnLoadIconPlainGroupMlcSchema } from '../molecules/btnLoadIconPlainGroupMlc'
import { qrCodeMlcSchema } from '../molecules/qrCodeMlc'
import { stubMessageMlcSchema } from '../molecules/stubMessageMlc'
import { schemaBuilder } from '../utils'

const sharingCodesOrgExpireLabelSchema: Describe<SharingCodesOrgExpireLabel> = object({
    expireLabelFirst: string(),
    expireLabelLast: optional(string()),
    timer: number(),
})

const schema: Describe<SharingCodesOrg> = object({
    componentId: optional(string()),
    expireLabel: optional(sharingCodesOrgExpireLabelSchema),
    qrCodeMlc: optional(qrCodeMlcSchema()),
    btnLoadIconPlainGroupMlc: optional(btnLoadIconPlainGroupMlcSchema()),
    stubMessageMlc: optional(stubMessageMlcSchema()),
})

export const sharingCodesOrgSchema = schemaBuilder(schema)
