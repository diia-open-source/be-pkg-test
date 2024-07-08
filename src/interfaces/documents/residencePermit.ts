import { DocStatus, DocumentMetaData } from '.'

export enum ResidencePermitGender {
    Male = 'Ч',
    Female = 'Ж',
}

export interface ResidencePermitNationality {
    codeAlfa3: string
    name: string
}

export interface ResidencePermitRegistrationInfo {
    city?: string
    index?: string
    regionName?: string
    flatNumber?: string
    houseNumber?: string
    streetName?: string
    streetType?: string
}

export interface ResidencePermitTaxpayerCard {
    status: DocStatus
    number: string
    creationDate: string
}

export interface ResidencePermit extends DocumentMetaData {
    id: string
    docNumber: string
    number: string
    series?: string
    firstNameUA: string
    lastNameUA: string
    firstNameEN: string
    lastNameEN: string
    recordNumber: string
    gender: ResidencePermitGender
    birthday: string
    issueDate: string
    expirationDate: string
    authority: string
    issueReason: string
    issueCode: number
    nationality: string[]
    nationalities: ResidencePermitNationality[]
    birthCountry: string
    registration?: string
    registrationInfo?: ResidencePermitRegistrationInfo
    sign: string
    photo: string
    taxpayerCard?: ResidencePermitTaxpayerCard
    rnokpp?: string
}
