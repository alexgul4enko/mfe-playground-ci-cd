module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['src/**/*.spec.ts', 'src/**/**.generated*', 'codegenTypedefs'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    {
      files: ['codegen.js'],
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['cypress/**/*.ts', 'cypress/**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: ['./cypress/tsconfig.json']
      },
      rules: {
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-namespace': 'off'
      }
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      extends: ['plugin:unicorn/recommended'],
      rules: {
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-null': 'off',
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
              pascalCase: true
            }
          }
        ]
      }
    },
    {
      files: [
        'webpack/*.js',
        'webpack/**/*.js',
        'codegen/*.js',
        'codegen/**/*.js',
        'webpack.config.js',
        'webpack.config.cypress.js',
        'scripts/extract.js',
        'scripts/cypress.ci.js',
        'cypress.config.js',
        '.eslintrc.js'
      ], // Or *.test.js
      rules: {
        'no-undef': 'off'
      }
    }
  ]
};
