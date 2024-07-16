const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2es/examples/*.js'
  },

  //"browser": "chrome",
  //"chromeWebSecurity": false,
});
