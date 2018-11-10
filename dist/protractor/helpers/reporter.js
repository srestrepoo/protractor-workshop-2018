"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
const jasmine_awesome_report_1 = require("jasmine-awesome-report");
exports.reporter = () => {
    jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
        spec: {
            displayStacktrace: true
        }
    }));
    const config = {
        fullPath: 'awesome-report',
        fileName: 'report',
        merge: true
    };
    jasmine.getEnv().addReporter(jasmine_awesome_report_1.AwesomeReport.getReport(config));
};
//# sourceMappingURL=reporter.js.map