const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
   // baseUrl: 'https://notes-serverless-app.com',

   viewportWidth: 1366,
   viewportHeight: 768,
  },
})
