import diiaConfig from '@diia-inhouse/eslint-config'

/**  @type {import('eslint').Linter.Config}  */
export default [
    ...diiaConfig,
    {
        ignores: ['*.js', '*.mjs', 'node_modules', 'dist', 'coverage'],
    },
    {
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json', './vitest/tsconfig.json'],
                ecmaVersion: 2022,
                sourceType: `module`,
            },
        },
    },
]
