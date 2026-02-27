import type { AsymmetricMatcherInterface, ExpectationResult } from '@vitest/expect'
import { Struct, StructError, assert as superstructAssert } from 'superstruct'

function isAsymmetricMatcher(obj: unknown): obj is AsymmetricMatcherInterface {
    if (obj === null || typeof obj !== 'object') {
        return false
    }

    return typeof (obj as AsymmetricMatcherInterface).asymmetricMatch === 'function'
}

function isPlainObject(obj: unknown): obj is Record<string, unknown> {
    if (obj === null || typeof obj !== 'object') {
        return false
    }

    const proto = Object.getPrototypeOf(obj)

    return proto === null || proto === Object.prototype
}

/**
 * Removes undefined fields from an object.
 */
export function cleanUndefined<T>(obj: T): T {
    if (obj === null || obj === undefined) {
        return obj
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => cleanUndefined(item)) as T
    }

    if (typeof obj === 'object') {
        if (isAsymmetricMatcher(obj) || !isPlainObject(obj)) {
            return obj
        }

        const result: Record<string, unknown> = {}

        for (const [key, value] of Object.entries(obj)) {
            if (value !== undefined) {
                result[key] = cleanUndefined(value)
            }
        }

        return result as T
    }

    return obj
}

/**
 * Cleans expected object for diff display.
 * Replaces asymmetric matchers with actual received values where they match.
 */
export function cleanForDiff<T>(expected: T, received: T): T {
    if (expected === null || expected === undefined) {
        return expected
    }

    if (Array.isArray(expected)) {
        const receivedArr = Array.isArray(received) ? received : []

        return expected.map((item, i) => cleanForDiff(item, receivedArr[i])) as T
    }

    if (typeof expected === 'object') {
        if (isAsymmetricMatcher(expected)) {
            if (expected.asymmetricMatch(received)) {
                return received
            }

            return expected
        }

        if (!isPlainObject(expected)) {
            return expected
        }

        const result: Record<string, unknown> = {}
        const receivedObj = (typeof received === 'object' && received !== null ? received : {}) as Record<string, unknown>

        for (const [key, value] of Object.entries(expected)) {
            if (value !== undefined) {
                result[key] = cleanForDiff(value, receivedObj[key])
            }
        }

        return result as T
    }

    return expected
}

function getPrettyMessage(data: unknown): string {
    return JSON.stringify(data, null, 2)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assert(matcherMessage: string, data: unknown, schema: Struct<any>): ExpectationResult {
    try {
        superstructAssert(data, schema)

        return {
            pass: true,
            message: () => `${matcherMessage} is satisfied`,
        }
    } catch (err) {
        if (err instanceof StructError) {
            const errors = []

            for (const failure of err.failures()) {
                const { message, value, type, path, branch } = failure

                const errorItem = {
                    message,
                    value,
                    expectedType: type,
                    path,
                    branch,
                }

                errors.push(errorItem)
            }

            const errorMessage = {
                matcherMessage,
                receivedData: data,
                errors,
            }

            return {
                pass: false,
                message: () => getPrettyMessage(errorMessage),
            }
        }

        return {
            pass: false,
            message: () => `${matcherMessage}: Unexpected error caused. ${getPrettyMessage(err)}`,
        }
    }
}
