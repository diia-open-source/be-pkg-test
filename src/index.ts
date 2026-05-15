import DocumentsGenerator from './documentsGenerator.js'
import PublicServiceGenerator from './publicServiceGenerator.js'
import RandomGenerator from './randomGenerator.js'
import SessionGenerator from './sessionGenerator.js'

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

export { default as SessionGenerator } from './sessionGenerator.js'

export { buildDbUtilsFn } from './dbUtilsBuilder.js'
