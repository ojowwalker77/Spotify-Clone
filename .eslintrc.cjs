/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    env: {
        node: true,
        browser: true,
    },
    extends: ['jwalker', 'jwalker/node', 'plugin:react/recommended', 'prettier'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['*.test.js'],
    reportUnusedDisableDirectives: true,
    rules: {
        camelcase: 'off',
        'guard-for-in': 'off',
        'no-continue': 'off',
        'no-plusplus': 'off',
        radix: 'off',
        'no-await-in-loop': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        complexity: 'off',
        'default-case': 'off',
        'no-undefined': 'off',
        'consistent-return': 'off',
        'no-return-assign': 'off',
        'no-inline-comments': 'off',
        'no-use-before-define': 'off',
        'line-comment-position': 'off',
        'require-atomic-updates': 'off',
        'no-console': ['error', { allow: ['trace'] }],

        'prefer-const': 'warn',
        'no-lone-blocks': 'warn',
        'no-unused-expressions': 'warn',
        'no-param-reassign': 'warn',

        'no-undef': 'error',
        'no-unused-vars': 'error',
        'global-require': 'error',

        'no-unsanitized/method': 'warn',

        'react/prop-types': 'off',
        'react/jsx-key': 'warn',

        'n/no-process-env': 'error',
        'n/no-missing-import': 'off',
        'n/prefer-global/buffer': 'off',
        'n/no-extraneous-import': 'off',
        'n/file-extension-in-import': 'off',

        'jsdoc/require-returns': 'warn',
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-param-type': 'off',

        // 'import/no-unresolved': 'error',
        'import/no-unresolved': ['error', { ignore: ['^#.+$'] }],
        'import/no-extraneous-dependencies': 'error',
        'import/no-dynamic-require': 'off',

        'unicorn/filename-case': 'off',
        'unicorn/prefer-array-some': 'off',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/consistent-destructuring': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/prefer-logical-operator-over-ternary': 'off',
        'unicorn/explicit-length-check': 'off',
        'unicorn/consistent-function-scoping': 'warn',
        'unicorn/prefer-string-slice': 'off',

        'security/detect-object-injection': 'off',
        'security/detect-non-literal-require': 'off',

        'sonarjs/no-duplicate-string': 'warn',
        'sonarjs/cognitive-complexity': 'off',
        'sonarjs/no-small-switch': 'warn',
        'sonarjs/no-nested-template-literals': 'warn',
    },
    overrides: [
        {
            files: ['*.mock.js'],
            rules: {
                'sonarjs/no-duplicate-string': 'off',
            },
        },
    ],
}
