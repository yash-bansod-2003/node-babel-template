module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.*', 'jest.config.*'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    rules: {
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
    },
};
