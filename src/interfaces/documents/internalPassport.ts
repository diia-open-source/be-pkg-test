import { DocStatus, DocumentMetaData, Localization } from '.'

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

export interface InternalPassport extends BasePassport {
    department: string
}
