"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.reporter = () => {
    jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
        spec: {
            displayStacktrace: true
        }
    }));
};
//# sourceMappingURL=reporter.js.map