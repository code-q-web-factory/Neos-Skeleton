const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
	src: resolveApp('src'),
	build: resolveApp('build'),
	static: resolveApp('static'),
	html: resolveApp('src/*.html'),
};
