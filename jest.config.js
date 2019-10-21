module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  snapshotSerializers: ['./node_modules/jest-serializer-vue'],
};
