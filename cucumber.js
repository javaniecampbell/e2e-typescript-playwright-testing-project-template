module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/step-definitions/**/*.ts', 'src/support/**/*.ts'],
    format: [
      '@cucumber/pretty-formatter',
      'progress-bar',
      'html:cucumber-report.html',
      'json:cucumber-report.json'
    ],
    paths: ['src/features/**/*.feature']
  }
};