import { randomUUID } from 'crypto'

import { DocStatus, InternalPassport, PassportType } from '@diia-inhouse/types'

import photo from '../photo'

export const internalPassport: InternalPassport = {
    docStatus: DocStatus.Ok,
    docNumber: '000031886',
    number: '000031886',
    id: randomUUID(),
    lastNameUA: 'Дія',
    firstNameUA: 'Надія',
    middleNameUA: 'Володимирівна',
    lastNameEN: 'Diia',
    firstNameEN: 'Nadiia',
    fullNameHash:
        'c06d8847c06805ecd8ce76d02a2c1fe5dd5ae23d9d53ef89832fee3fb0ef6903761a994722701ae72870292f146812d5d4b9802c91abec7beca90771ad6e6f8d',
    genderUA: 'Ж',
    genderEN: 'F',
    nationalityUA: 'Україна',
    nationalityEN: 'Ukraine',
    photo,
    birthday: '13.02.2000',
    sign: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2MQmjHnIAAEDgIIZO6vHgAAAABJRU5ErkJggg==',
    birthPlaceUA: 'М. СЛОВ`ЯНСЬК ДОНЕЦЬКА ОБЛАСТЬ УКРАЇНА',
    birthPlaceEN: 'M.  SLOVIANSK DONETSKA OBLAST UKRAINA/UKR',
    issueDate: '09.03.2016',
    expirationDate: '09.03.2026',
    recordNumber: '20000213-01467',
    type: PassportType.ID,
    documentRegistrationPlaceUA: 'УКРАЇНА М. КИЇВ ВУЛ. АРМСТРОНГА БУД. 11 КВ. 69.\nДата реєстрації: 20.07.1969',
    currentRegistrationPlaceUA: 'УКРАЇНА М. КИЇВ ВУЛ. АРМСТРОНГА БУД. 11 КВ. 69.\nДата реєстрації: 20.07.1969',
    department: '1455',
    taxpayerCard: {
        status: 1014,
        number: expect.any(String),
        creationDate: expect.any(String),
    },
}
