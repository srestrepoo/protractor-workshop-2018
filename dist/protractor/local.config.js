"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("./helpers/reporter");
exports.config = {
    framework: 'jasmine',
    specs: ['../test/**/*.spec.js'],
    getPageTimeout: 30000,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().timeouts().implicitlyWait(3000);
        reporter_1.reporter();
    }
};
//# sourceMappingURL=local.config.js.map