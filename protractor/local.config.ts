import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0)
    reporter();
  }
};
