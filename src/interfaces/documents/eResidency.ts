import { DocumentMetaData } from '.'

export enum ResidentshipStatus {
    NotActive = 0,
    Active = 1,
    Terminated = 2,
}

export enum DocumentType {
    EResidency = 'e-residency',
    EResidentPassport = 'e-resident-passport',
}

export interface EResidency extends DocumentMetaData {
    documentType?: DocumentType.EResidency
    birthCityEN: string
    birthCityUA: string
    birthCountryCode: string
    birthCountryEN: string
    birthCountryUA: string
    birthDate: string
    citizenshipCountryCode: string
    citizenshipCountryEN: string
    citizenshipCountryUA: string
    docNumber: string
    email: string
    expireDate: string
    firstNameEN: string
    firstNameUA: string
    gender: string
    id: string
    issueDate: string
    itn: string
    lastNameEN: string
    lastNameUA: string
    passportDocNumber: string
    patronymicEN?: string
    patronymicUA?: string
    phoneNumber: string
    residentshipStatus: ResidentshipStatus
    residenceApartment?: string
    residenceBuilding: string
    residenceCityEN: string
    residenceCityUA: string
    residenceCountryCode: string
    residenceCountryEN: string
    residenceCountryUA: string
    residencePostalCode?: string
    residenceStreet: string
    signature: string
}

export interface EResidentPassport extends DocumentMetaData {
    documentType?: DocumentType.EResidentPassport
    birthCountryCode: string
    birthCountryEN: string
    birthCountryUA: string
    birthDate: string
    citizenshipCountryCode: string
    citizenshipCountryEN: string
    citizenshipCountryUA: string
    docNumber: string
    expireDate: string
    firstNameEN: string
    firstNameUA: string
    gender: string
    id: string
    issueDate: string
    issuingAuthority: string
    issuingCountryCode: string
    issuingCountryEN: string
    issuingCountryUA: string
    itn: string
    lastNameEN: string
    lastNameUA: string
    patronymicEN?: string
    patronymicUA?: string
    photo: string
    signature: string
    type: string
}
