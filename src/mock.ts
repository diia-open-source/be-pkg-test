import { ClassLike, ModuleMocker } from 'jest-mock'

/**
 * @deprecated
 * This function is not compatible with Vitest.
 * For Vitest compatibility, please use the 'vitest-mock-extended' package instead.
 */
export function mockClass<T extends ClassLike>(classToMock: T): jest.MockedClass<T> {
    const mocker = new ModuleMocker(global)

    const metadata = mocker.getMetadata(classToMock)
    if (!metadata) {
        throw new Error(`Cannot find metadata to mock ${classToMock.name}`)
    }

    return <jest.MockedClass<T>>mocker.generateFromMetadata<T>(metadata)
}

/**
 * @deprecated
 * This function is not compatible with Vitest.
 * For Vitest compatibility, please use the 'vitest-mock-extended' package instead.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mockAnyClass<T extends ClassLike>(classToMock: T): jest.MockedClass<any> {
    return mockClass(classToMock)
}

/**
 * @deprecated
 * This function is not compatible with Vitest.
 * For Vitest compatibility, please use the 'vitest-mock-extended' package instead.
 */
export function mockInstance<T extends ClassLike>(
    classToMock: T,
    props: Partial<Record<keyof InstanceType<T>, unknown>> = {},
): InstanceType<T> {
    const mockedClass = mockClass(classToMock)
    const mockedInstance = new mockedClass()

    const keys = <(keyof T)[]>Object.keys(props)

    for (const key of keys) {
        Object.defineProperty(mockedInstance, key, { value: props[key] })
    }

    return mockedInstance
}
