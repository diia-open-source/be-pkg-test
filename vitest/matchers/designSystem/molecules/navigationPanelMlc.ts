import { Describe, array, enums, object, optional, string } from 'superstruct'

import { AppVersions, NavigationPanelMlc, PublicServiceContextMenu, PublicServiceContextMenuType } from '@diia-inhouse/types'

import { iconAtmSchema } from '../atoms/iconAtm'
import { schemaBuilder } from '../utils'

const appVersionsSchema: Describe<AppVersions> = object({
    minVersion: optional(
        object({
            iOS: optional(string()),
            Android: optional(string()),
            Huawei: optional(string()),
            Browser: optional(string()),
        }),
    ),
    maxVersion: optional(
        object({
            iOS: optional(string()),
            Android: optional(string()),
            Huawei: optional(string()),
            Browser: optional(string()),
        }),
    ),
    versions: optional(
        object({
            iOS: optional(array(string())),
            Android: optional(array(string())),
            Huawei: optional(array(string())),
            Browser: optional(array(string())),
        }),
    ),
})

const publicServiceContextMenuSchema: Describe<PublicServiceContextMenu> = object({
    name: string(),
    code: optional(string()),
    appVersions: optional(appVersionsSchema),
    type: enums(Object.values(PublicServiceContextMenuType)),
})

const schema: Describe<NavigationPanelMlc> = object({
    componentId: optional(string()),
    ellipseMenu: array(publicServiceContextMenuSchema),
    label: optional(string()),
    iconAtm: optional(iconAtmSchema),
})

export const navigationPanelMlcSchema = schemaBuilder(schema)
