import { DocStatus } from '../../interfaces/documents'
import { ResidencePermit, ResidencePermitGender } from '../../interfaces/documents/residencePermit'
import photo from '../photo'

const residencePermit: ResidencePermit = {
    docStatus: DocStatus.Ok,
    docNumber: '900000499',
    number: '900000499',
    rnokpp: '900000499',
    recordNumber: '2021041300014',
    photo,
    sign: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2MQmjHnIAAEDgIIZO6vHgAAAABJRU5ErkJggg==',
    id: '2021041300014-2021-11-02',
    lastNameUA: 'Тест',
    firstNameUA: 'Епосвидки',
    lastNameEN: 'Testovyi',
    firstNameEN: 'Yyyyy',
    gender: ResidencePermitGender.Male,
    birthday: '13.04.2021',
    issueDate: '02.11.2021',
    expirationDate: '18.11.2031',
    issueReason: 'Закінчення строку дії посвідки на постійне проживання',
    issueCode: 502,
    authority: 'Відділ централізованного оформлення документів №17 ГУ ДМС України в м. Києві',
    nationality: ['Бутан', 'Гренландія'],
    nationalities: [
        {
            codeAlfa3: 'BTN',
            name: 'Бутан',
        },
        {
            codeAlfa3: 'GRL',
            name: 'Гренландія',
        },
    ],
    birthCountry: 'Ангола',
    taxpayerCard: {
        status: DocStatus.Confirming,
        number: '9318782702',
        creationDate: '14.09.2023',
    },
}

export default residencePermit
