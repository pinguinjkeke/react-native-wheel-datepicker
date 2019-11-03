module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
  preset: 'react-native',
  setupFiles: ['enzyme-react-16-adapter-setup'],
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  transformIgnorePatterns: ['node_modules/(?!(react-native.*)/)'],
};
