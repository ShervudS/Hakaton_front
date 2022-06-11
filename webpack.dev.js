const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { DefinePlugin } = require('webpack');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',

    entry: {
        main: './src/index.dev.js',
    },

    output: {
        publicPath: '/',
    },

    devtool: 'inline-source-map',

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        historyApiFallback: true,
        port: 8080,
    },

    module: {
        rules: [
            // == scss/css
            {
                test: /\.(sc|c)ss$/,
                use: [
                    // == create style nodes from js strings
                    {
                        loader: 'style-loader',
                    },

                    // == translate css into commonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName:
                                    '[path][name]__[local]--[hash:base64:5]',
                            },
                            sourceMap: true,
                        },
                    },

                    // == transform css
                    {
                        loader: 'postcss-loader',
                    },

                    // == compile scss to css
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        // == allow global constants | development
        new DefinePlugin({
            __WEBPACK_ENVIRONMENT__: JSON.stringify('development'),
        }),
    ],
});
