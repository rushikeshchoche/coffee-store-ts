/** @type {import('@jest/types').Config.InitialOptions} */
const {defaults} = require('jest-config');
const config = {
  testEnvironment: 'jsdom',
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};

module.exports = config;
