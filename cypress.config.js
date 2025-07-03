const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      return config;
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    excludeSpecPattern: [],
    experimentalMemoryManagement: true,
    hideXHRInCommandLog: true,
    numTestsKeptInMemory: 1,
    pageLoadTimeout: 100000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    baseUrl: 'https://demoqa.com/',
    reporter:"mocha-junit-reporter",
    reporterOptions: {
      jenkinsMode: true,
      mochaFile: 'cypress/reports/junit-result-[hash].xml',
      rootSuiteTitle: 'Cypress',
      suiteTitleSeparator: '.',
      toConsole: false,
      useFullSuiteTitle: true,
      testsuitesTitle: true
    },
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: false,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    scrollBehavior: 'center',
    specPattern:["cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.cy.ts","cypress/e2e/src/features/**/*.feature"],
    supportFile: 'cypress/support/e2e.ts',
    taskTimeout: 150000,
    trashAssetsBeforeRuns: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: true
  },
})
