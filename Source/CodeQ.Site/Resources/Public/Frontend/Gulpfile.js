var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concatJs = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

// Input configuration
var inputAssets = [
];
var inputJs = [
	'./vendor_js/**/*.js',
	'./js/**/*.js'
];
var inputSass = ['./scss/**/*.scss'];
var watchSass = inputSass.slice(0);
watchSass.push('./../../Private/Fusion/**/*.scss');

var allTasks = ['sass', 'js', 'assets'];
var output = './built';

gulp.task('serve', allTasks, function () {
	browserSync.init({
		proxy: 'dev.domain.loc',
		open: false
	});

	gulp.watch(watchSass, ['sass'])
		.on('change', function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
	gulp.watch(inputJs, ['js'])
		.on('change', function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
});

gulp.task('assets', function () {
	return gulp
		.src(inputAssets)
		.pipe(gulp.dest(output));
});

gulp.task('js', function () {
	return gulp
		.src(inputJs)
		.pipe(sourcemaps.init())
		.pipe(concatJs('index.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(output));
});

gulp.task('sass', function () {
	var sassOptions = {
		errLogToConsole: true,
		outputStyle: 'expanded'
	};
	return gulp
		.src(inputSass)
		.pipe(sassGlob())
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
gulp.task('build', allTasks);
