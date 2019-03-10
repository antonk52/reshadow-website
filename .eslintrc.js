module.exports = {
    extends: [
        'standard',
        'plugin:flowtype/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/flowtype',
        'prettier/react',
        'prettier/standard',
    ],
    plugins: ['flowtype', 'react', 'prettier', 'standard'],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
    },
    overrides: [
        {
            files: ['**/spec/*.js'],
            env: {
                jest: true,
            },
        },
        {
            files: ['*.config.js', '.*.js'],
            parserOptions: {
                sourceType: 'script',
            },
            env: {
                node: true,
            },
        },
    ],
    rules: {
        'no-sequences': 'off',
    },
};
