import nextJest from 'next/jest'
import type { Config } from 'jest'

const createJestConfig = nextJest({
  dir: '.', // Next.js app root
})

const config: Config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  coverageProvider: 'v8',
}

export default createJestConfig(config)

