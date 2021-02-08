import * as gulp from 'gulp';
import * as pugEngine from 'pug';
import watch = require('gulp-watch');
import pug = require('gulp-pug');
import ts = require('gulp-typescript');

const tsConfig: ts.Settings = {
    module: "CommonJS",
    target: "ES2020",
    removeComments: true,
    sourceMap: true,
};

gulp.task('default', gulp.series(compilePug, compileTypeScript));

function compilePug(cb: () => void) {
    gulp.src('src/**/*.pug').pipe(pug({
        pug: pugEngine,
        doctype: 'html',
        pretty: false
    })).pipe(gulp.dest('src/render'));
    cb();
}

function compileTypeScript(cb: () => void) {
    gulp.src('src/**/*.ts').pipe(ts(tsConfig)).pipe(gulp.dest('dist'));
    cb();
}