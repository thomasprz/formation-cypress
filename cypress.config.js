const { defineConfig } = require("cypress");
/// <reference types="cypress" />

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/tests/*.spec.js'
  },
});
