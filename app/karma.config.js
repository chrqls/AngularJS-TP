module.exports = function (config) {
    config.set({
        basePath: './',
        frameworks: [
            'jasmine'
        ],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-material/angular-material.js',
            'bower_components/ui-router/release/angular-ui-router.js',
            'bower_components/angular-messages/angular-messages.js',
            'src/**/*.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['nyan'],
        port: 9876,
        colors: true,
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
