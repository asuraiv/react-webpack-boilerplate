const path = require('path');

const config = {
	entry: './src/step01/index.js',
	output: {
		path: path.resolve(__dirname, 'step01-dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};

export default config;