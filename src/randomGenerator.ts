import { randomInt } from 'node:crypto'

export default class RandomGenerator {
    getRandomInt(minParam: number, maxParam: number): number {
        const min = Math.ceil(minParam)
        const max = Math.floor(maxParam)

        return randomInt(min, max + 1)
    }

    getRandomIntByLength(length: number): number {
        let randomNumber = ''

        for (let i = 0; i < length; i++) {
            randomNumber += randomInt(10)
        }

        return Number(randomNumber)
    }
}
