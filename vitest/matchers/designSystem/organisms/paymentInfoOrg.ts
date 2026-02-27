import { Describe, array, object, optional, string } from 'superstruct'

import { PaymentInfoItem, PaymentInfoOrg } from '@diia-inhouse/types'

import { tableItemHorizontalLargeMlcSchema } from '../molecules/tableItemHorizontalLargeMlc'
import { tableItemHorizontalMlcSchema } from '../molecules/tableItemHorizontalMlc'
import { tableMainHeadingMlcSchema } from '../molecules/tableMainHeadingMlc'
import { tableSecondaryHeadingMlcSchema } from '../molecules/tableSecondaryHeadingMlc'
import { schemaBuilder } from '../utils'

const paymentInfoItemSchema: Describe<PaymentInfoItem> = object({
    tableItemHorizontalMlc: optional(tableItemHorizontalMlcSchema()),
    tableItemHorizontalLargeMlc: optional(tableItemHorizontalLargeMlcSchema()),
})

const schema: Describe<PaymentInfoOrg> = object({
    componentId: optional(string()),
    tableMainHeadingMlc: optional(tableMainHeadingMlcSchema()),
    tableSecondaryHeadingMlc: optional(tableSecondaryHeadingMlcSchema()),
    items: array(paymentInfoItemSchema),
})

export const paymentInfoOrgSchema = schemaBuilder(schema)
