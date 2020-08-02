module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'no-restricted-syntax': 0,
        'no-console': 'off',
        'no-debugger': 'off',
        'class-methods-use-this': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'import/no-cycle': 0,
        'no-prototype-builtins': 0,
        '@typescript-eslint/no-use-before-define': 0,
        quotes: ['error', 'single'],
        'max-len': 0,
        'import/prefer-default-export': 0,
        'no-shadow': 0,
        '@typescript-eslint/no-unused-vars': 0,
        'no-param-reassign': 0,
        'no-underscore-dangle': 0,
        'no-return-assign': 0,
        'new-cap': 0,
        'vue/no-unused-components': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        'no-plusplus': 0,
        'consistent-return': 0,
        'no-unused-expressions': 0,
        'no-mixed-operators': 0,
        'comma-dangle': 0,
        'prefer-promise-reject-errors': 0,
        'arrow-parens': 0,
        'func-style': 0,
        'object-curly-newline': 0,
        'linebreak-style': 'off',
        '@typescript-eslint/no-this-alias': 0,
        'no-unused-vars': 0,
    },
    overrides: [
        {
            files: [
                'tests/**/*',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
