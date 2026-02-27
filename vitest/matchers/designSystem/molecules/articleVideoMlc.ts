import { Describe, object, optional, string } from 'superstruct'

import { ArticleVideoMlc } from '@diia-inhouse/types'

import { playerBtnAtmSchema } from '../atoms/playerBtnAtm'
import { schemaBuilder } from '../utils'

const schema: Describe<ArticleVideoMlc> = object({
    source: string(),
    playerBtnAtm: optional(playerBtnAtmSchema()),
})

export const articleVideoMlcSchema = schemaBuilder(schema)
