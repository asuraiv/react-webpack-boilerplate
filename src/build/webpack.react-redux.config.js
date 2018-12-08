const path = require('path');

module.exports = {
	entry: __dirname + '/../react-redux-example/components/App.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	devtool: "#eval-source-map", // bundle.js 에서 오류 발생시, debugging을 용이하게 하기 위해 설정
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devServer: {
		contentBase: './dist',
		port: 9001
	}
};