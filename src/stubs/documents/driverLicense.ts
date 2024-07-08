import { randomUUID } from 'node:crypto'

import { DocStatus } from '../../interfaces/documents'
import { DriverLicense, LicenseType } from '../../interfaces/documents/driverLicense'
import photo from '../photo'

const driverLicense: DriverLicense = {
    id: randomUUID(),
    docStatus: DocStatus.Ok,
    docNumber: 'ВХХ578221',
    type: LicenseType.permanent,
    clientId: '20997141',
    serial: 'ВХХ',
    number: '578221',
    issueDate: '09.04.2015',
    lastNameUA: 'Дія',
    firstNameUA: 'Надія',
    middleNameUA: 'Володимирівна',
    fullNameHash:
        'c06d8847c06805ecd8ce76d02a2c1fe5dd5ae23d9d53ef89832fee3fb0ef6903761a994722701ae72870292f146812d5d4b9802c91abec7beca90771ad6e6f8d',
    lastNameEN: 'Lastnameen',
    firstNameEN: 'Firstnameen',
    photo,
    birthday: '21.02.1997',
    birthPlace: 'ХАРКІВСЬКА ОБЛ.',
    expirationDate: '09.04.2045',
    departmentId: '10698',
    department: '(6303) ВРЕР ДАІ №3 М. ХАРКІВ ГУМВС УКРАЇНИ В ХАРКІВСЬКІЙ ОБЛАСТІ',
    serialNumber: 'ВХХ578221',
    categories: 'B',
    categoriesFull: [
        {
            category: 'B',
            openDate: '09.04.2015',
        },
    ],
    recordNumber: 'Не вказано',
    ua: {
        card: {
            name: 'Посвідчення водія',
            icon: '|_|_|',
            lastName: 'Дія',
            firstName: 'Надія',
            middleName: 'Володимирівна',
            birthDate: {
                name: 'Дата народження',
                value: '21.02.1997',
            },
            category: {
                name: 'Категорія',
                value: 'B',
            },
            documentNumber: {
                name: 'Номер документа',
                value: 'ВХХ578221',
            },
        },
        name: 'Посвідчення водія',
        icon: '|_|_|',
        country: 'Україна',
        lastName: {
            code: '1.',
            name: 'Прізвище',
            value: 'Дія',
        },
        firstName: {
            code: '2.',
            name: 'Ім’я та по батькові',
            value: 'Надія Володимирівна',
        },
        birthDate: {
            name: 'Дата народження',
            value: '21.02.1997',
        },
        birth: {
            code: '3.',
            name: 'Дата та місце народження',
            value: '21.02.1997\nХАРКІВСЬКА ОБЛ.',
        },
        issueDate: {
            code: '4а.',
            name: 'Дата видачі',
            value: '09.04.2015',
        },
        expiryDate: {
            code: '4b.',
            name: 'Дійсний до',
            value: '09.04.2045',
        },
        department: {
            code: '4с.',
            name: 'Орган, що видав',
            value: '(6303) ВРЕР ДАІ №3 М. ХАРКІВ ГУМВС УКРАЇНИ В ХАРКІВСЬКІЙ ОБЛАСТІ',
        },
        identifier: {
            code: '4d.',
            name: 'УНЗР',
            value: 'Не вказано',
        },
        documentNumber: {
            code: '5.',
            name: 'Номер документа',
            value: 'ВХХ578221',
        },
        category: {
            code: '9.',
            name: 'Категорія',
            value: 'B',
        },
        categoryOpeningDate: {
            code: '10.',
            name: 'Дата відкриття категорії',
            value: '09.04.2015',
        },
        categories: [
            {
                category: {
                    code: '9.',
                    name: 'Категорія',
                    value: 'B',
                },
                openingDate: {
                    code: '10.',
                    name: 'Дата відкриття категорії',
                    value: '09.04.2015',
                },
            },
        ],
        tickerOptions: {
            type: 'info',
            text: 'Дійсне до 09.04.2045 • УКРАЇНА • Дійсне до 09.04.2045 • УКРАЇНА • ',
        },
    },
    eng: {
        card: {
            name: 'Driving Licence',
            icon: '|_|_|',
            lastName: 'Lastnameen',
            firstName: 'Firstnameen',
            birthDate: {
                name: 'Date of birth',
                value: '21.02.1997',
            },
            category: {
                name: 'Category',
                value: 'B',
            },
            documentNumber: {
                name: 'Licence number',
                value: 'ВХХ578221',
            },
        },
        name: 'Driving Licence',
        icon: '|_|_|',
        country: 'Ukraine',
        lastName: {
            code: '1.',
            name: 'Surname:',
            value: 'Lastnameen',
        },
        firstName: {
            code: '2.',
            name: 'Given name(s):',
            value: 'Firstnameen',
        },
        birthDate: {
            name: 'Date of birth:',
            value: '21.02.1997',
        },
        birth: {
            code: '3.',
            name: 'Date and place of birth:',
            value: '21.02.1997\nХАРКІВСЬКА ОБЛ.',
        },
        issueDate: {
            code: '4а.',
            name: 'Date of issue:',
            value: '09.04.2015',
        },
        expiryDate: {
            code: '4b.',
            name: 'Expiry date:',
            value: '09.04.2045',
        },
        department: {
            code: '4с.',
            name: 'Issuing authority:',
            value: '(6303) ВРЕР ДАІ №3 М. ХАРКІВ ГУМВС УКРАЇНИ В ХАРКІВСЬКІЙ ОБЛАСТІ',
        },
        identifier: {
            code: '4d.',
            name: 'Record number:',
            value: 'Not Provided',
        },
        documentNumber: {
            code: '5.',
            name: 'Licence number:',
            value: 'ВХХ578221',
        },
        category: {
            code: '9.',
            name: 'Category:',
            value: 'B',
        },
        categoryOpeningDate: {
            code: '10.',
            name: 'Category issuing date:',
            value: '09.04.2015',
        },
        categories: [
            {
                category: {
                    code: '9.',
                    name: 'Category:',
                    value: 'B',
                },
                openingDate: {
                    code: '10.',
                    name: 'Category issuing date:',
                    value: '09.04.2015',
                },
            },
        ],
        tickerOptions: {
            type: 'info',
            text: 'Valid until 09.04.2045 • UKRAINE • Valid until 09.04.2045 • UKRAINE • ',
        },
    },
}

export default driverLicense
