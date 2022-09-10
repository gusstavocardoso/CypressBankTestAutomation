const { defineConfig } = require('cypress')

module.exports = defineConfig({
  relativeUrl: '/angularJs-protractor/BankingProject/#/login',
  watchForFileChanges: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.globalsqa.com',
  },
})
