var config = {
    jsSources: './app/src/**/*.js',
    karmaConfigFile: './app/karma.config.js',
    doc: './docs'
};

var gulp = require('gulp-help')(require('gulp')),
    plugins = require('gulp-load-plugins')(),
    path = require('path'),
    karma = require('karma').server;

gulp.task('quality','lint the code once',function(){
    gulp.src(config.jsSources)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('jshint','continuously lint your code and log in the console with style ', ['quality'],function(){
    gulp.watch(config.jsSources,['jshint']);
});

var pathToKarmaConfigFile = path.resolve(config.karmaConfigFile);

gulp.task('unit','run unit test once', function (done) {
    karma.start({
        configFile: pathToKarmaConfigFile,
        singleRun: true,
        autoWatch: false
    }, done);
});

gulp.task('tdd','run unit tests continuously', function (done) {
    karma.start({
        configFile: pathToKarmaConfigFile
    }, done);

});

gulp.task('documentation::clean','clean the ./doc folder',function(){
    gulp.src(config.doc,{read:false})
        .pipe(plugins.clean());
});

gulp.task('documentation','generate documentation', ['documentation::clean'], function () {
    var options = {
        html5Mode: true,
        startPage: '/api',
        title: "My Awesome Docs",
        image: "path/to/my/image.png",
        imageLink: "http://my-domain.com",
        titleLink: "/api"
    };
    return gulp.src(config.jsSources)
        .pipe(plugins.ngdocs.process(options))
        .pipe(gulp.dest(config.doc));
});