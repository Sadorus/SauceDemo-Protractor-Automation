// eslint-disable-next-line prefer-destructuring

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

require('@babel/register');

exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
  },
  suites: {
    homePage: 'specs/homepage-spec.js',
  },
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true,
      },
    }));
  },
};
