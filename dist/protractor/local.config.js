"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("./helpers/reporter");
exports.config = {
    framework: 'jasmine',
    specs: ['../test/**/*.spec.js'],
    getPageTimeout: 30000,
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().timeouts().implicitlyWait(0);
        reporter_1.reporter();
    }
};
//# sourceMappingURL=local.config.js.map