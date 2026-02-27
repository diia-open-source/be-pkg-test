import type { ExpectationResult } from '@vitest/expect'
import { Struct } from 'superstruct'

import { assert } from '../../utils'

export function toBeDesignSystemElement(received: unknown, schema: Struct<unknown, unknown>): ExpectationResult {
    return assert('toBeDesignSystemElement matcher', received, schema)
}
