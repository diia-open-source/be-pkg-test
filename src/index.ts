import DocumentsGenerator from './documentsGenerator'
import PublicServiceGenerator from './publicServiceGenerator'
import RandomGenerator from './randomGenerator'
import SessionGenerator from './sessionGenerator'

export { mockClass, mockAnyClass, mockInstance } from './mock'

export { SessionGenerator }

export default class TestKit {
    readonly session: SessionGenerator

    readonly random: RandomGenerator

    readonly docs: DocumentsGenerator

    readonly public: PublicServiceGenerator

    constructor() {
        this.random = new RandomGenerator()
        this.session = new SessionGenerator(this.random)
        this.docs = new DocumentsGenerator()
        this.public = new PublicServiceGenerator()
    }
}
