const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { DefinePlugin } = require('webpack');
const { GenerateSW } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    entry: {
        main: './src/index.prod.js',
    },

    output: {
        publicPath: './',
    },

    optimization: {
        minimize: true,
        minimizer: [
            // == minify js
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),

            // == minify css
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            maxSize: 128000,
            chunks: 'initial',
        },
    },

    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },

    module: {
        rules: [
            // == scss/css
            {
                test: /\.(sc|c)ss$/,
                use: [
                    // == create css files
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: 'auto',
                        },
                    },

                    // == translate css into commonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                // this pattern matches with setting in `babel-plugin-react-css-modules`
                                localIdentName: '[hash:base64:5]',
                            },
                            sourceMap: false,
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
        // == create css files
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[fullhash:8].css',
        }),

        // == service workers
        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        }),

        // == allow global constants | production
        new DefinePlugin({
            __WEBPACK_ENVIRONMENT__: JSON.stringify('production'),
        }),
    ],
});
