module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/support/run.ts', 'src/support/hooks.ts','src/step-definitions/**/*.ts', 'src/support/**/*.ts'],
    format: [
      '@cucumber/pretty-formatter',
      'progress-bar',
      'html:cucumber-report.html',
      'json:cucumber-report.json',
      'allure-cucumberjs/dist/allure-cucumber'
    ],
    retry: 2,
    parallel: 2,
    paths: ['src/features/**/*.feature']
  }
};