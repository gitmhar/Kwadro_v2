import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://localhost:5173",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    screenshotOnRunFailure: true,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
