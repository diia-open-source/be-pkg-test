import { Describe, object, string } from 'superstruct'

import { GreyTitleAtm } from '@diia-inhouse/types'

import { schemaBuilder } from '../utils'

const schema: Describe<GreyTitleAtm> = object({
    componentId: string(),
    label: string(),
})

export const greyTitleAtmSchema = schemaBuilder(schema)
