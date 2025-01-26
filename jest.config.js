/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: "jest-environment-jsdom", //environment
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.json" }],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: ["**/__test__/**/*.test.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
};
