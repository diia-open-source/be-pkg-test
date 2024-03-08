import { createHmac, randomUUID } from 'crypto'

import { ObjectId } from 'bson'
import { DateTime, Interval } from 'luxon'

import {
    AcquirerSession,
    AcquirerTokenData,
    ActionSession,
    ActionVersion,
    AppUserActionHeaders,
    AuthDocumentType,
    AuthEntryPoint,
    CabinetUserSession,
    CabinetUserTokenData,
    DiiaOfficeStatus,
    DiiaOfficeUserSession,
    EResidentApplicantSession,
    EResidentApplicantTokenData,
    EResidentSession,
    EResidentTokenData,
    Gender,
    IdentifierPrefix,
    PartnerSession,
    PartnerTokenData,
    PlatformType,
    PortalUserSession,
    PortalUserTokenData,
    ProfileFeature,
    ServiceEntranceSession,
    ServiceEntranceTokenData,
    ServiceUserSession,
    ServiceUserTokenData,
    SessionType,
    TemporarySession,
    TemporaryTokenData,
    User,
    UserActionArguments,
    UserSession,
    UserTokenData,
} from '@diia-inhouse/types'

import { GetUserActionArgumentsOps, IdentifierOps } from './interfaces'
import RandomGenerator from './randomGenerator'

export default class SessionGenerator {
    constructor(private readonly random: RandomGenerator) {}

    private readonly dateFormat = 'dd.MM.yyyy'

    getUserActionArguments(
        user: Partial<UserTokenData> = {},
        headers: Partial<AppUserActionHeaders> = {},
        ops: GetUserActionArgumentsOps = {},
    ): UserActionArguments {
        return {
            session: this.getUserSession(user, ops.validItn),
            headers: this.getHeaders(headers),
        }
    }

    getAuthEntryPoint(authEntryPoint: Partial<AuthEntryPoint> = {}): AuthEntryPoint {
        return {
            target: 'bankid',
            isBankId: true,
            bankName: 'diia bank',
            document: AuthDocumentType.ForeignPassport,
            ...authEntryPoint,
        }
    }

    getUserSession(tokenData: Partial<UserTokenData> = {}, validItn = false): UserSession {
        const sessionType = SessionType.User
        const userData = this.getUserData(tokenData, validItn)
        const { itn } = userData
        const result: UserTokenData = {
            ...userData,
            mobileUid: randomUUID(),
            document: { type: AuthDocumentType.ForeignPassport, value: '12345' },
            sessionType,
            identifier: this.createIdentifier(itn),
            authEntryPoint: this.getAuthEntryPoint(),
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            ...tokenData,
        }

        return { sessionType, user: result }
    }

    getDiiaOfficeUserSession(
        tokenData: Partial<UserTokenData> = {},
        validItn = false,
        features: Record<string, unknown> = {},
    ): DiiaOfficeUserSession {
        return {
            ...this.getUserSession(tokenData, validItn),
            features: {
                [ProfileFeature.office]: {
                    officeIdentifier: randomUUID(),
                    profileId: randomUUID(),
                    organizationId: randomUUID(),
                    unitId: randomUUID(),
                    isOrganizationAdmin: false,
                    scopes: ['auth'],
                    status: DiiaOfficeStatus.ACTIVE,
                    tokenFailedAt: undefined,
                },
                ...features,
            },
        }
    }

    getCabinetUserSession(tokenData: Partial<CabinetUserTokenData> = {}, validItn = false): CabinetUserSession {
        const sessionType = SessionType.CabinetUser
        const userData = this.getUserData(tokenData, validItn)
        const { itn } = userData
        const result: CabinetUserTokenData = {
            ...userData,
            mobileUid: randomUUID(),
            identifier: this.createIdentifier(itn),
            sessionType,
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            ...tokenData,
        }

        return { sessionType, user: result }
    }

    getEResidentSession(tokenData: Partial<EResidentTokenData> = {}, validItn = false): EResidentSession {
        const sessionType = SessionType.EResident
        const userData = this.getUserData(tokenData, validItn)
        const { itn } = userData
        const result: EResidentTokenData = {
            ...userData,
            mobileUid: randomUUID(),
            document: { type: AuthDocumentType.EResidency, value: '12345' },
            sessionType,
            identifier: this.createIdentifier(itn, { prefix: IdentifierPrefix.EResident }),
            authEntryPoint: this.getAuthEntryPoint(),
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            ...tokenData,
        }

        return { sessionType, user: result }
    }

    getEResidentApplicantSession(tokenData: Partial<EResidentApplicantTokenData> = {}): EResidentApplicantSession {
        const email = tokenData.email || 'eresident-applicant@mail.com'
        const sessionType = SessionType.EResidentApplicant
        const result: EResidentApplicantTokenData = {
            email,
            sessionType,
            document: { type: AuthDocumentType.EResidentApplicantEmail, value: email },
            mobileUid: randomUUID(),
            identifier: this.createIdentifier(email, { prefix: IdentifierPrefix.EResidentApplicant }),
            authEntryPoint: this.getAuthEntryPoint(),
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            ...tokenData,
        }

        return { sessionType, user: result }
    }

    getAcquirerSession(tokenData: Partial<AcquirerTokenData> = {}): AcquirerSession {
        const sessionType = SessionType.Acquirer
        const result: AcquirerTokenData = {
            sessionType,
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            _id: new ObjectId(),
            ...tokenData,
        }

        return { sessionType, acquirer: result }
    }

    getPartnerSession(tokenData: Partial<PartnerTokenData> = {}): PartnerSession {
        const sessionType = SessionType.Partner
        const result: PartnerTokenData = {
            _id: new ObjectId(),
            scopes: {},
            sessionType,
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            ...tokenData,
        }

        return { sessionType, partner: result }
    }

    getTemporarySession(tokenData: Partial<TemporaryTokenData> = {}): TemporarySession {
        const sessionType = SessionType.Temporary
        const result: TemporaryTokenData = {
            sessionType,
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            mobileUid: randomUUID(),
            ...tokenData,
        }

        return { sessionType, temporary: result }
    }

    getServiceEntranceSession(tokenData: Partial<ServiceEntranceTokenData> = {}): ServiceEntranceSession {
        const sessionType = SessionType.ServiceEntrance
        const result: ServiceEntranceTokenData = {
            acquirerId: new ObjectId(),
            branchHashId: randomUUID(),
            offerHashId: randomUUID(),
            offerRequestHashId: randomUUID(),
            mobileUid: randomUUID(),
            sessionType,
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            ...tokenData,
        }

        return { sessionType, entrance: result }
    }

    getPortalUserSession(tokenData: Partial<PortalUserTokenData> = {}, validItn = false): PortalUserSession {
        const sessionType = SessionType.PortalUser
        const birthDate = tokenData.birthDay || this.getBirthDate()
        const gender = this.getGender()
        const itn = this.generateItn(birthDate, gender, validItn)
        const result: PortalUserTokenData = {
            sessionType,
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            fName: 'Дія',
            lName: 'Надія',
            mName: 'Володимирівна',
            itn,
            birthDay: birthDate,
            identifier: randomUUID(),
            ...tokenData,
        }

        return { sessionType, user: result }
    }

    getServiceUserSession(tokenData: Partial<ServiceUserTokenData> = {}): ServiceUserSession {
        const sessionType = SessionType.ServiceUser
        const result: ServiceUserTokenData = {
            sessionType,
            refreshToken: {
                value: randomUUID(),
                expirationTime: Date.now() + 300000,
            },
            login: 'test-login',
            ...tokenData,
        }

        return { sessionType, serviceUser: result }
    }

    getSessionBySessionType(sessionType: SessionType, tokenData = {}, validItn = false): ActionSession | undefined {
        switch (sessionType) {
            case SessionType.Acquirer:
                return this.getAcquirerSession(tokenData)
            case SessionType.CabinetUser:
                return this.getCabinetUserSession(tokenData, validItn)
            case SessionType.EResident:
                return this.getEResidentSession(tokenData, validItn)
            case SessionType.EResidentApplicant:
                return this.getEResidentApplicantSession(tokenData)
            case SessionType.Partner:
                return this.getPartnerSession(tokenData)
            case SessionType.PortalUser:
                return this.getPortalUserSession(tokenData, validItn)
            case SessionType.ServiceEntrance:
                return this.getServiceEntranceSession(tokenData)
            case SessionType.ServiceUser:
                return this.getServiceUserSession(tokenData)
            case SessionType.Temporary:
                return this.getTemporarySession(tokenData)
            case SessionType.User:
                return this.getUserSession(tokenData, validItn)
            default:
                return undefined
        }
    }

    getHeaders(headers: Partial<AppUserActionHeaders> = {}): AppUserActionHeaders {
        return {
            mobileUid: randomUUID(),
            traceId: randomUUID(),
            token: randomUUID(),
            platformType: PlatformType.Android,
            platformVersion: '13',
            appVersion: '3.0.55.981',
            actionVersion: ActionVersion.V3,
            ...headers,
        }
    }

    getBirthDate(): string {
        const fromDate = DateTime.fromFormat('31.12.1899', this.dateFormat)
        const untilDate = DateTime.fromFormat('14.12.2004', this.dateFormat)
        const interval = Interval.fromDateTimes(fromDate, untilDate)
        const randomDay = this.random.getRandomInt(0, interval.length('days'))

        return fromDate.plus({ days: randomDay }).toFormat(this.dateFormat)
    }

    getGender(): Gender {
        return this.random.getRandomInt(0, 1) === 0 ? Gender.male : Gender.female
    }

    generateItn(birthDate: string, gender: Gender, validItn: boolean): string {
        if (!validItn) {
            return Math.floor(Math.random() * 10000000000).toString()
        }

        const fromDate = DateTime.fromFormat('31.12.1899', this.dateFormat)
        const interval = Interval.fromDateTimes(fromDate, DateTime.fromFormat(birthDate, this.dateFormat))
        const firstPart = interval.length('days').toString().padStart(5, '0')
        const secondPart = this.getItnSeqNumber(gender).toString().padStart(4, '0')
        const baseNumber = firstPart.concat(secondPart)
        const [a, b, c, d, e, f, g, h, i] = baseNumber.split('').map((item: string) => parseInt(item, 10))
        const checksum = -a + 5 * b + 7 * c + 9 * d + 4 * e + 6 * f + 10 * g + 5 * h + 7 * i
        const controlNumber = (checksum - 11 * Math.floor(checksum / 11)) % 10

        return baseNumber.concat(controlNumber.toString())
    }

    private getUserData(tokenData: Partial<User> = {}, validItn = false): User {
        const birthDate = tokenData.birthDay || this.getBirthDate()
        const gender = tokenData.gender || this.getGender()
        const itn = this.generateItn(birthDate, gender, validItn)

        return {
            itn,
            gender,
            fName: 'Надія',
            lName: 'Дія',
            mName: 'Володимирівна',
            phoneNumber: '+380999999999',
            email: 'test@test.com',
            passport: '12345',
            document: { type: AuthDocumentType.ForeignPassport, value: '12345' },
            birthDay: birthDate,
            addressOfRegistration: '',
            addressOfBirth: '',
            ...tokenData,
        }
    }

    private getItnSeqNumber(gender: Gender): number {
        const seqNumber = this.random.getRandomInt(1, 9998)
        const isOdd = this.isOdd(seqNumber)
        if (isOdd) {
            return gender === Gender.male ? seqNumber : seqNumber + 1
        }

        return gender === Gender.male ? seqNumber + 1 : seqNumber
    }

    private isOdd(number: number): boolean {
        return number % 2 === 1
    }

    private createIdentifier(itn: string, ops: IdentifierOps = {}): string {
        const { customSalt, prefix = '' } = ops
        const hmac = createHmac('sha512', customSalt || 'salt')

        hmac.update(itn)

        const hash = hmac.digest('hex')

        return `${prefix}${hash}`
    }
}
