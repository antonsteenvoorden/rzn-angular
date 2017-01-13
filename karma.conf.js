module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma'),
      require('karma-htmlfile-reporter'),
      require('karma-coverage')
    ],


    files: [
      {pattern: './src/test.ts', watched: false}
    ],


    preprocessors: {
      './src/test.ts': ['angular-cli'],
      'src/app/**/*.ts': 'coverage'
    },


    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },


    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },


    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },


    reporters: ['progress', 'coverage', 'html'],
    coverageReporter: {
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage-final.json'
      }]
    },


    htmlReporter: {
      outputFile: 'report/unittest/html-report/index.html',
      pageTitle: 'Unit Tests',
      subPageTitle: 'TravelPlanner',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },


    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    /* Autowatch was true, en singlerun false */
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    browserNoActivityTimeout: 100000
  });
};
