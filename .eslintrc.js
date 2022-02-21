module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
        'plugin:prettier/recommended'
    ],
    settings: {},
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'import/no-anonymous-default-export': 'off',
        'array-callback-return': 'off',
        'prettier/prettier': 'off',
        "no-throw-literal": "off",
    },
    plugins: ['prettier'],
};
