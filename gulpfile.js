var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var del = require('del');
var webpack = require('gulp-webpack');
var htmlReplace = require('gulp-html-replace');
var inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('clean', function () {
    return del.sync(['dist/**', 'stage/**']);
});

gulp.task('inline', ['clean'], function () {
    return gulp.src('src/app/**/*.ts')
        .pipe(inlineNg2Template({base: '/src'}))
        .pipe(gulp.dest('stage/app'));
});


gulp.task('copyTsConfig', ['inline'], function () {
    return gulp.src('src/tsconfig.json')
        .pipe(gulp.dest('stage'));
});

gulp.task('webpack', ['copyTsConfig'], function () {
    return gulp.src('stage/app/boot.ts')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('stage/'));
});

gulp.task('js', ['webpack'], function () {
    return gulp.src('stage/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function () {
    return gulp.src('src/**/*.css')
        .pipe(concat('main.css'))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/'));
});

gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(htmlReplace({
            'css': {
                src: 'main.css',
                tpl: '<link rel="stylesheet" type="text/css" href="%s">'
            },
            'js': ['dependencies.js', 'bundle.js']
        }))
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/'));
});

gulp.task('assets', function () {
    return gulp.src('src/**/*.png')
        .pipe(gulp.dest('dist/'));
});

gulp.task('dependencies', function () {
    return gulp.src(['node_modules/reflect-metadata/Reflect.js', 'node_modules/zone.js/dist/zone.js'])
        .pipe(concat('dependencies.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['js', 'css', 'html', 'assets', 'dependencies'], function () {
    return del.sync(['src/bundle.js', 'stage/**'])
});
