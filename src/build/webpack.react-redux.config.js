const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractPlugin = new ExtractTextPlugin({
	filename: "bundle.css",
	allChunks: true
});

const baseAssetPath = path.join(__dirname, "/../react-redux-example/assets")

module.exports = {

	entry: __dirname + '/../react-redux-example/components/App.js',

	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},

	devtool: "#eval-source-map", // bundle.js 에서 오류 발생시, debugging을 용이하게 하기 위해 설정

	resolve: {
		alias: {
			'assets': baseAssetPath
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},

	plugins: [
		extractPlugin
	],

	devServer: {
		contentBase: './dist',
		port: 9001
	}
};