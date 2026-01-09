const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://buggy.justtestit.org/',
    specPattern: 'cypress/e2e/**/*.{js,ts,cy.js,cy.ts}',
    supportFile: false
  }
});
