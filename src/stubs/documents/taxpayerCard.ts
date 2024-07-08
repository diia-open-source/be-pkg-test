import { DocStatus } from '../../interfaces/documents'
import { TaxpayerCard } from '../../interfaces/documents/taxpayerCard'

const taxpayerCard: TaxpayerCard = {
    docStatus: DocStatus.Ok,
    isVisible: true,
    id: 'e8e78c30d705a0604247e0e714f8870312f1ada6391ea6c9dea3581835f6d4963ea986262314cfd0be909ce443e7e129196a9e846b54ab67d6db6b162806e0b5',
    docNumber: '9779872378',
    lastNameUA: 'Дія',
    firstNameUA: 'Надія',
    middleNameUA: 'Володимирівна',
    birthday: '21.07.1945',
    creationDate: '13.09.2023',
    tickerOptions: {
        type: 'info',
        text: 'РНОКПП дійсний. Перевірено Державною податковою службою',
    },
}

export default taxpayerCard
