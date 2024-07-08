const path = require('path');
module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/support/run.ts', 'src/support/hooks.ts', 'src/step-definitions/**/*.ts', 'src/support/**/*.ts'],
    format: [
      "@cucumber/pretty-formatter",
      "progress-bar",
      "html:cucumber-report.html",
      "json:cucumber-report.json",
      // `${path.resolve(__dirname, 'config/reporter.js')}`,
      "./config/reporter.js"
    ],
    retry: 2,
    parallel: 2,
    paths: ['src/features/**/*.feature']
  }
};