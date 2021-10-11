const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = require('./paths');

function generateHtmlPlugins(dir) {
	// Read files in template directory
	const templateFiles = fs.readdirSync(path.resolve(__dirname, dir));

	return templateFiles.map(item => {
		const parts = item.split('.');
		const name = parts[0];
		const extension = parts[1];

		return extension !== 'html' ? false : new HtmlWebpackPlugin({
			filename: item,
			template: path.resolve(__dirname, `${dir}/${name}.${extension}`),
			minify: {
				removeComments: false,
				removeEmptyAttributes: true,
			},
			templateParameters: {
				content: extension === 'json' ? path.resolve(__dirname, `${dir}/${name}.json`) : ''
			}
		});
	});
}

const htmlPlugins = generateHtmlPlugins('../src/template/page');

module.exports = (env, argv) => {
	let resourcesPath = argv.mode === 'production' ? '/_Resources/Static/Packages/CodeQ.Site/Frontend/build/' : './';
	return {
		context: paths.src,
		entry: {
			index: `./scripts/index.js`,
		},
		output: {
			filename: `scripts/[name].js`,
			path: paths.build,
			publicPath: resourcesPath,
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.(css|scss)$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2,
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [require('autoprefixer'), require('postcss-flexbugs-fixes')],
								sourceMap: true,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						}
					],
				},
				{
					test: /\.html$/i,
					loader: 'html-loader',
					options: {
						attributes: true,
						interpolate: true,
						minimize: false,
						exportAsEs6Default: true
					},
				},
				{
					test: /\.(woff2?|eot|ttf|otf|svg)$/,
					exclude: [/images/, /static/, /videos/],
					loader: 'file-loader',
					options: {
						outputPath: './fonts',
						name: '[name].[ext]',
					},
				},
				{
					test: /\.(gif|ico|jpe?g|png|svg)$/,
					exclude: [/fonts/, /static/, /videos/],
					loader: 'file-loader',
					options: {
						outputPath: './images',
						name: '[name].[ext]',
					},
				},
				{
					test: /\.(mp4|mpeg|webm)$/,
					exclude: [/fonts/, /images/, /static/],
					loader: 'file-loader',
					options: {
						outputPath: './videos',
						name: '[name].[ext]',
					},
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles/[name].css',
			}),
		].concat(htmlPlugins)
	}
};
