import { randomUUID } from 'node:crypto'

import { DocStatus, OwnerType } from '../../interfaces/documents'
import { ForeignPassport, PassportGenderEN, PassportGenderUA, PassportType } from '../../interfaces/documents/foreignPassport'
import photo from '../photo'

const passportId = randomUUID()
const passportNumber = '449752'

const foreignPassport: ForeignPassport = {
    docStatus: DocStatus.Ok,
    docNumber: 'FC449752',
    number: passportNumber,
    series: 'FC',
    id: passportId,
    lastNameUA: 'Дія',
    firstNameUA: 'Надія',
    middleNameUA: '',
    lastNameEN: 'Diia',
    firstNameEN: 'Nadiia',
    genderUA: PassportGenderUA.F,
    genderEN: PassportGenderEN.F,
    nationalityUA: 'Україна',
    nationalityEN: 'Ukraine',
    photo,
    birthday: '13.02.2000',
    sign: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2MQmjHnIAAEDgIIZO6vHgAAAABJRU5ErkJggg==',
    birthPlaceUA: 'ДОНЕЦЬКА ОБЛ.',
    birthPlaceEN: 'UKR',
    issueDate: '12.05.2016',
    expirationDate: '12.05.2026',
    recordNumber: '20000213-01467',
    type: PassportType.P,
    documentRegistrationPlaceUA: 'УКРАЇНА М. КИЇВ ВУЛ. АРМСТРОНГА БУД. 11 КВ. 69.\nДата реєстрації: 20.07.1969',
    currentRegistrationPlaceUA: 'УКРАЇНА М. КИЇВ ВУЛ. АРМСТРОНГА БУД. 11 КВ. 69.\nДата реєстрації: 20.07.1969',
    departmentUA: '1455',
    departmentEN: '1455',
    typeUA: 'P',
    typeEN: 'P',
    countryCode: 'UKR',
    taxpayerCard: {
        status: 1014,
        number: '01234567890',
        creationDate: '17.02.2022',
    },
    baseData: {
        id: passportId,
        number: passportNumber,
        status: DocStatus.Ok,
        name: 'Закордонний паспорт',
        documentType: 'foreign-passport',
        documentTypeCamelCase: 'foreignPassport',
        ownerType: OwnerType.owner,
        /** iso */
        issuedAt: '2016-12-05',
        /** iso */
        expiresAt: '2026-12-05',
    },
}

export default foreignPassport
