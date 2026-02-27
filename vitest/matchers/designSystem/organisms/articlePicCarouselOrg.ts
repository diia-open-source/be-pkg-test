import { Describe, array, object, optional } from 'superstruct'

import { ArticlePicCarouselItems, ArticlePicCarouselOrg } from '@diia-inhouse/types'

import { articlePicAtmSchema } from '../atoms/articlePicAtm'
import { dotNavigationAtmSchema } from '../atoms/dotNavigationAtm'
import { articleVideoMlcSchema } from '../molecules/articleVideoMlc'
import { schemaBuilder } from '../utils'

export const articlePicCarouselItemsSchema: Describe<ArticlePicCarouselItems> = object({
    articlePicAtm: optional(articlePicAtmSchema()),
    articleVideoMlc: optional(articleVideoMlcSchema()),
})

const schema: Describe<ArticlePicCarouselOrg> = object({
    dotNavigationAtm: optional(dotNavigationAtmSchema()),
    items: array(articlePicCarouselItemsSchema),
})

export const articlePicCarouselOrgSchema = schemaBuilder(schema)
