import { Describe, array, object, optional, string } from 'superstruct'

import { QuestionFormsOrg, QuestionFormsOrgItem } from '@diia-inhouse/types'

import { checkboxSquareMlcSchema } from '../molecules/checkboxSquareMlc'
import { inputDateMlcSchema } from '../molecules/inputDateMlc'
import { inputTextMlcSchema } from '../molecules/inputTextMlc'
import { schemaBuilder } from '../utils'
import { inputDateTimeOrgSchema } from './inputDateTimeOrg'
import { selectorOrgSchema } from './selectorOrg'

const questionFormsOrgItem: Describe<QuestionFormsOrgItem> = object({
    inputTextMlc: optional(inputTextMlcSchema()),
    inputDateMlc: optional(inputDateMlcSchema()),
    selectorOrg: optional(selectorOrgSchema()),
    checkboxSquareMlc: optional(checkboxSquareMlcSchema()),
    inputDateTimeOrg: optional(inputDateTimeOrgSchema()),
})

const schema: Describe<QuestionFormsOrg> = object({
    id: string(),
    title: optional(string()),
    condition: optional(string()),
    componentId: optional(string()),
    items: array(questionFormsOrgItem),
})

export const questionFormsOrgSchema = schemaBuilder(schema)
