module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!**/*.d.ts'
  ]
}
