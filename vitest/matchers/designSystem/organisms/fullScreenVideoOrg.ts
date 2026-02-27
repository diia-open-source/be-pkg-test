import { Describe, object, optional, string } from 'superstruct'

import { FullScreenVideoOrg } from '@diia-inhouse/types'

import { btnPlainAtmSchema } from '../atoms/btnPlainAtm'
import { btnPrimaryDefaultAtmSchema } from '../atoms/btnPrimaryDefaultAtm'
import { playerBtnAtmSchema } from '../atoms/playerBtnAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<FullScreenVideoOrg> = object({
    source: string(),
    btnPlainAtm: optional(btnPlainAtmSchema()),
    btnPrimaryDefaultAtm: optional(btnPrimaryDefaultAtmSchema()),
    playerBtnAtm: optional(playerBtnAtmSchema()),
})

export const fullScreenVideoOrgSchema = schemaBuilder(schema)
