const path = require('path');

let config = {
	mode: '',
	entry: {
		maplibre: { import: ['maplibre-gl'] },
		index: {
			import: './src/index.ts',
			dependOn: ['maplibre'],
		},
	},

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};

const build = {
	filename: '[name].js',
	path: path.resolve(__dirname, 'build'),
};

const distribute = {
	filename: '[name].js',
	path: path.resolve(__dirname, 'dist'),
};

const devServer = {
	static: {
		directory: path.resolve(__dirname, 'build'),
	},
	port: 3000,
	open: true,
	hot: true,
	compress: true,
	historyApiFallback: true,
	https: true,
};

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.output = build;
		config.devServer = devServer;
	} else {
		config.output = distribute;
	}

	return config;
};
