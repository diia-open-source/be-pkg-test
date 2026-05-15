import { defineConfig, base } from '@diia-inhouse/oxc-config/oxlint'

export default defineConfig({
    ...base,
    rules: {
        ...base.rules,
        '@diia-inhouse/locale/no-hardcoded-cyrillic': 'off',
    },
    overrides: [
        ...(base.overrides ?? []),
        {
            files: ['vitest/extend-expect.ts'],
            rules: {
                'unicorn/filename-case': 'off',
            },
        },
        {
            files: ['vitest/matchers/**'],
            rules: {
                'oxc/no-this-in-exported-function': 'off',
            },
        },
    ],
})
