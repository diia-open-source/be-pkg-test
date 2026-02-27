import { Describe, object, optional, string } from 'superstruct'

import { LeftNavIcon, TitleGroupMediumIconRight, TitleGroupMlc } from '@diia-inhouse/types'

import { iconActionSchema } from '../atoms/shared/iconAction'
import { iconSchema } from '../enums/icon'
import { schemaBuilder } from '../utils'

const titleGroupMediumIconRightSchema: Describe<TitleGroupMediumIconRight> = object({
    code: iconSchema,
    action: optional(iconActionSchema()),
})

const leftNavIconSchema: Describe<LeftNavIcon> = object({
    code: iconSchema,
    accessibilityDescription: optional(string()),
    action: optional(iconActionSchema()),
})

const schema: Describe<TitleGroupMlc> = object({
    heroText: string(),
    label: optional(string()),
    mediumIconRight: optional(titleGroupMediumIconRightSchema),
    leftNavIcon: optional(leftNavIconSchema),
})

export const titleGroupMlcSchema = schemaBuilder(schema)
