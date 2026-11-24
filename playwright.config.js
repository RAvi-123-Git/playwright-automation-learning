
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './',

    timeout: 60000,

    use: {
        headless: false,

        launchOptions: {
            slowMo: 1000
        }
    }

});
