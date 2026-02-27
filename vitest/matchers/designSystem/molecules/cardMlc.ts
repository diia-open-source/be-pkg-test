import { Describe, array, object, optional, string } from 'superstruct'

import { CardMlc, CardMlcSubtitle } from '@diia-inhouse/types'

import { btnPrimaryAdditionalAtmSchema } from '../atoms/btnPrimaryAdditionalAtm'
import { btnStrokeAdditionalAtmSchema } from '../atoms/btnStrokeAdditionalAtm'
import { chipStatusAtmSchema } from '../atoms/chipStatusAtm'
import { tickerAtmSchema } from '../atoms/tickerAtm'
import { schemaBuilder } from '../utils'
import { cardMlcTickerSchema } from './cardMlcTicker'

const cardMlcSubtitle: Describe<CardMlcSubtitle> = object({
    icon: optional(string()),
    value: string(),
})

const schema: Describe<CardMlc> = object({
    id: string(),
    label: optional(string()),
    title: string(),
    description: optional(string()),
    botLabel: optional(string()),
    componentId: optional(string()),
    chipStatusAtm: chipStatusAtmSchema(),
    tickerAtm: tickerAtmSchema(),
    subtitle: optional(cardMlcSubtitle),
    subtitles: array(cardMlcSubtitle),
    ticker: optional(cardMlcTickerSchema()),
    btnPrimaryAdditionalAtm: optional(btnPrimaryAdditionalAtmSchema()),
    btnStrokeAdditionalAtm: optional(btnStrokeAdditionalAtmSchema()),
})

export const cardMlcSchema = schemaBuilder(schema)
