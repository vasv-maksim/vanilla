module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    files: [
      { pattern: 'src/**/*.spec.js', included: true },
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-verbose-reporter'),
    ],
    reporters: ['verbose', 'kjhtml'],
    autoWatch: true,
    client: {
      clearContext: false,
    },
  });
};
