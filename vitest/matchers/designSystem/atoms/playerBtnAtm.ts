import { Describe, enums, object, string } from 'superstruct'

import { PlayerBtnAtm, PlayerBtnAtmType } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<PlayerBtnAtm> = object({
    icon: string(),
    type: enums(Object.values(PlayerBtnAtmType)),
})

export const playerBtnAtmSchema = schemaBuilder(schema)
