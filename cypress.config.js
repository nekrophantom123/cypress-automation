const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 990,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
