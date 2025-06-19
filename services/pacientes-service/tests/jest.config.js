module.exports = {
  displayName: 'pacientes-service:e2e',
  testMatch: ['<rootDir>/**/*.e2e-spec.ts'],
  globalSetup: '<rootDir>/setup/jestGlobalSetup.ts',
  setupFilesAfterEnv: ['<rootDir>/setup/jestSetupAfterEnv.ts'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/../src/$1',
    '^@tests/(.*)$': '<rootDir>/$1',
    '^@odoonto7/shared/(.*)$': '<rootDir>/../../libs/shared/$1',
    '^@odoonto7/shared$': '<rootDir>/../../libs/shared',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testRegex: '\\.e2e-spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  collectCoverageFrom: [
    'src/**/*.(t|j)s',
  ],
  coverageDirectory: './coverage',
  testTimeout: 10000,
}; 