// Karma configuration for accessibility assessments
// Generated on Sat Oct 11 2014 17:44:41 GMT-0400 (EDT)

module.exports = function(config) {

  var webdriverConfig = {
    hostname: 'localhost',
    port: 4444
  }

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      // Dependencies
      {pattern: 'bower_components/jquery/jquery.min.js', watched: false},

      // Fixtures
      {pattern: 'src/js/core.js'},
      {pattern: 'src/js/components/*.js'},
      {pattern: 'src/js/strings/*.js'},
      {pattern: 'src/js/custom/*.js'},
      {pattern: 'src/js/lib/*.js'},
      {pattern: 'src/js/lib/wcag/*.js'},

      // Specs
      {pattern: 'test/selenium-test/*Spec.js'},
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // web server port
    port: 9876,


    // Custome Selenium Launchers
    customLaunchers: {
      'ChromeSelenium': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'chrome',
      },
      'FirefoxSelenium': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'firefox',
      },
      'SafariSelenium': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'safari',
      }
    },


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      // 'ChromeSelenium',
      // 'FirefoxSelenium',
      // 'SafariSelenium',
      'Chrome'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};