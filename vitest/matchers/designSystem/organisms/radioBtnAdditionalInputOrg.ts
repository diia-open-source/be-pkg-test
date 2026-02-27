import { Describe, object, optional } from 'superstruct'

import { RadioBtnAdditionalInputOrg } from '@diia-inhouse/types'

import { inputTextMlcSchema } from '../molecules/inputTextMlc'
import { radioBtnMlcSchema } from '../molecules/radioBtnMlc'
import { schemaBuilder } from '../utils'

const schema: Describe<RadioBtnAdditionalInputOrg> = object({
    radioBtnMlc: optional(radioBtnMlcSchema()),
    inputTextMlc: optional(inputTextMlcSchema()),
})

export const radioBtnAdditionalInputOrgSchema = schemaBuilder(schema)
