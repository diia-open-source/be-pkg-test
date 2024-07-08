import { DocStatus, DocumentMetaData } from '.'

export interface TaxpayerCardInDocument {
    name: string
    value: string
    status: DocStatus
    statusDescription: string
}

export interface TaxpayerCard extends DocumentMetaData {
    isVisible: boolean
    id: string
    docNumber: string
    lastNameUA: string
    firstNameUA: string
    middleNameUA: string
    birthday: string
    creationDate: string
}
