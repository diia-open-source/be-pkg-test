import { Describe, number, object, optional, string } from 'superstruct'

import { VerificationCode, VerificationCodeExpireLabel, VerificationCodesOrg } from '@diia-inhouse/types'

import { barCodeMlcSchema } from '../molecules/barCodeMlc'
import { qrCodeMlcSchema } from '../molecules/qrCodeMlc'
import { stubMessageMlcSchema } from '../molecules/stubMessageMlc'
import { schemaBuilder } from '../utils'
import { toggleButtonGroupOrgSchema } from './toggleButtonGroupOrg'

const verificationCodeExpireLabelSchema: Describe<VerificationCodeExpireLabel> = object({
    expireLabelFirst: string(),
    expireLabelLast: string(),
    timer: number(),
})

const verificationCodeSchema: Describe<VerificationCode> = object({
    qrCodeMlc: optional(qrCodeMlcSchema()),
    barCodeMlc: optional(barCodeMlcSchema()),
    toggleButtonGroupOrg: optional(toggleButtonGroupOrgSchema()),
    stubMessageMlc: optional(stubMessageMlcSchema()),
    expireLabel: optional(verificationCodeExpireLabelSchema),
})

const schema: Describe<VerificationCodesOrg> = object({
    componentId: optional(string()),
    UA: optional(verificationCodeSchema),
    EN: optional(verificationCodeSchema),
})

export const verificationCodesOrgSchema = schemaBuilder(schema)
