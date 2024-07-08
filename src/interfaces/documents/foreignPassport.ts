import { TaxpayerCardInDocument } from './taxpayerCard'

import { DocStatus, DocumentMetaData, DocumentTicker, Localization, NameValue } from '.'

export enum PassportGenderEN {
    F = 'F',
    M = 'M',
}

export enum PassportGenderUA {
    F = 'Ж',
    M = 'Ч',
}

export enum PassportType {
    ID = 'ID',
    P = 'P',
}

export interface BasePassport extends DocumentMetaData {
    id: string
    docNumber: string
    series?: string
    number: string
    genderUA: PassportGenderUA | string
    genderEN: PassportGenderEN | string
    nationalityUA: string
    nationalityEN: string
    lastNameUA: string
    lastNameEN: string
    firstNameUA: string
    firstNameEN: string
    middleNameUA: string
    birthday: string
    birthPlaceUA: string
    birthPlaceEN: string
    issueDate: string
    expirationDate: string
    recordNumber: string
    taxpayerCard?: {
        status: DocStatus
        number: string
        creationDate: string
    }
    photo: string
    sign: string
    type: PassportType
    documentRegistrationPlaceUA: string
    currentRegistrationPlaceUA: string
    shareLocalization?: Localization
}

export interface ForeignPassport extends BasePassport {
    departmentUA: string
    departmentEN: string
    typeUA: string
    typeEN: string
    countryCode: string
    [Localization.UA]?: ForeignPassportInstanceDetails
    [Localization.ENG]?: ForeignPassportInstanceDetails
}

export interface ForeignPassportInstanceDetails {
    card: {
        name: string
        icon: string
        lastName: string
        firstName: string
        middleName?: string
        birthDate: NameValue
        docNumber: NameValue
    }
    name: string
    icon: string
    country: string
    docNumber: NameValue
    lastName: string
    firstName: string
    gender: NameValue
    birthDate: NameValue
    nationality: NameValue
    department: NameValue
    issueDate: NameValue
    expiryDate: NameValue
    identifier: NameValue
    type: NameValue
    countryCode: NameValue
    taxpayer?: TaxpayerCardInDocument
    birthPlace: NameValue
    residenceRegistrationPlace: NameValue
    registrationDate: NameValue
    tickerOptions?: DocumentTicker
}
