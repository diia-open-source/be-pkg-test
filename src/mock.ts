import { ClassLike, ModuleMocker } from 'jest-mock'

export function mockClass<T extends ClassLike>(classToMock: T): jest.MockedClass<T> {
    const mocker = new ModuleMocker(global)

    const metadata = mocker.getMetadata(classToMock)
    if (!metadata) {
        throw new Error(`Cannot find metadata to mock ${classToMock.name}`)
    }

    return <jest.MockedClass<T>>mocker.generateFromMetadata<T>(metadata)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mockAnyClass<T extends ClassLike>(classToMock: T): jest.MockedClass<any> {
    return mockClass(classToMock)
}

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
