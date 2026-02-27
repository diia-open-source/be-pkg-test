import type { ExpectationResult, MatcherState } from '@vitest/expect'

import { cleanForDiff, cleanUndefined } from '../utils'

export function toBe(this: MatcherState, received: unknown, expected: unknown): ExpectationResult {
    if (typeof received !== 'object' || received === null || typeof expected !== 'object' || expected === null) {
        const pass = Object.is(received, expected)

        return {
            pass,
            message: () =>
                pass
                    ? `expected ${this.utils.printReceived(received)} not to be ${this.utils.printExpected(expected)}`
                    : `expected ${this.utils.printReceived(received)} to be ${this.utils.printExpected(expected)}`,
        }
    }

    const cleanedReceived = cleanUndefined(received)
    const cleanedExpected = cleanUndefined(expected)

    const pass = this.equals(cleanedReceived, cleanedExpected, this.customTesters)

    if (pass) {
        return {
            pass: true,
            message: () =>
                `expected ${this.utils.printReceived(cleanedReceived)} not to deeply equal ${this.utils.printExpected(expected)}`,
        }
    }

    const diffExpected = cleanForDiff(expected, cleanedReceived)
    const diff = this.utils.diff(diffExpected, cleanedReceived)

    return {
        pass: false,
        message: () => `toBe diff:\n\n${diff}`,
    }
}
