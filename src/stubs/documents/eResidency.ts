import { DocStatus } from '../../interfaces/documents'
import { EResidency, ResidentshipStatus } from '../../interfaces/documents/eResidency'
import signature from '../signature'

const eResidency: EResidency = {
    birthCityEN: 'Bratislava',
    birthCityUA: 'Братислава',
    birthCountryCode: 'SVK',
    birthCountryEN: 'Slovakia',
    birthCountryUA: 'Словаччина',
    birthDate: '12.05.1996',
    citizenshipCountryCode: 'SVK',
    citizenshipCountryEN: 'SVK',
    citizenshipCountryUA: '',
    docNumber: '2222-111111',
    docStatus: DocStatus.Ok,
    email: 'john.doe@email.com',
    expireDate: new Date().toISOString(),
    firstNameEN: 'John',
    firstNameUA: 'Джон',
    gender: 'M',
    id: '9c3f7d54-c84b-405b-8959-12c85f02e40b',
    issueDate: '12.05.2023',
    itn: '2432900063',
    lastNameEN: 'Doe',
    lastNameUA: 'Доу',
    passportDocNumber: '2222-111111',
    phoneNumber: '+533443223431',
    residenceBuilding: '123',
    residenceCityEN: 'Kyiv',
    residenceCityUA: 'Київ',
    residenceCountryCode: 'UA',
    residenceCountryEN: 'Ukraine',
    residenceCountryUA: 'Україна',
    residenceStreet: '',
    residentshipStatus: ResidentshipStatus.Active,
    signature,
    patronymicEN: '',
    patronymicUA: '',
    residenceApartment: '',
    residencePostalCode: '',
}

export default eResidency
