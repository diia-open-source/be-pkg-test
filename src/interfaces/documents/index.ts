export enum OwnerType {
    owner = 'owner',
    properUser = 'properUser',
}

export interface DocumentBaseData {
    id: string
    number: string
    status: number
    name: string
    documentType: string
    documentTypeCamelCase: string
    ownerType: OwnerType
    listName?: string
    subtype?: string
    /** iso */
    issuedAt?: string
    /** iso */
    expiresAt?: string
}

export interface NameValue {
    name: string
    value: string
}

export interface DocumentCommon<T = string> {
    id: string
    docNumber: string
    docStatus: DocStatus
    subtype?: T
    issueDate?: Date
    expirationDate?: Date
    ownerType?: OwnerType
    fullNameHash?: string
}

/** @deprecated used for old document models. Use DocumentCommon  */
export interface DocumentMetaData {
    docStatus: DocStatus
    docNumber: string
    docSubtype?: string
    ownerType?: OwnerType
    registrationDate?: Date
    expirationDate?: string
    tickerOptions?: DocumentTicker
    fullNameHash?: string
}

export interface DocumentsMetaData {
    currentDate?: string
    expirationDate?: string
    eTag?: string
}

export enum DocStatus {
    Ok = 200,
    NoContent = 204,
    NotFound = 404,
    NoPhoto = 1010,
    OldModel = 1011,
    AdditionalVerification = 1012,
    AdditionalValidation = 1013,
    Confirming = 1014,
    NotConfirmed = 1015,
    Inactive = 1016,
    NoRequiredData = 1017,
    Updating = 1018,
    Deleting = 1019,
}

export enum Localization {
    UA = 'ua',
    ENG = 'eng',
}

export type DocumentTickerType = 'info' | 'warning'

export interface DocumentTicker {
    type: DocumentTickerType
    text: string
}

export enum UserDocumentSubtype {
    Permanent = 'permanent',
    IssuedFirst = 'issuedFirst',
    Recovery = 'recovery',
    Vaccination = 'vaccination',
    Test = 'test',
    Pupil = 'pupil',
    Student = 'student',
}
