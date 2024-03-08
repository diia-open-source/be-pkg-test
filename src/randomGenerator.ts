export default class RandomGenerator {
    getRandomInt(minParam: number, maxParam: number): number {
        const min = Math.ceil(minParam)
        const max = Math.floor(maxParam)

        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    getRandomIntByLength(length: number): number {
        let randomNumber = ''

        for (let i = 0; i < length; i++) {
            randomNumber += Math.floor(Math.random() * 10)
        }

        return Number(randomNumber)
    }
}
