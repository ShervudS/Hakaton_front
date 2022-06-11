const path = require('path');
const dotenv = require('dotenv');

const {DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FontPreloadPlugin = require('webpack-font-preload-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const main_config = require(__dirname + '/src/configs/main_config');
const {
    META_TITLE,
    META_DESCRIPTION,
    META_KEYWORDS,
    APP_NAME,
    APP_NAME_SHORT,
    APP_DESCRIPTION,
    APP_THEME_COLOR,
    APP_BACKGROUND_COLOR,
} = main_config;

module.exports = {
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: 'js/[name]-[fullhash:8].js',
        clean: true,
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            _images: path.resolve(__dirname, 'src/assets/images/'),
            _components: path.resolve(__dirname, 'src/components/'),
            _configs: path.resolve(__dirname, 'src/configs/'),
            _redux: path.resolve(__dirname, 'src/redux/'),
            _styles: path.resolve(__dirname, 'src/styles/'),
            _utils: path.resolve(__dirname, 'src/utils/'),
        },
    },

    module: {
        rules: [
            // == babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            // == fonts
            {
                test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash:8][ext]',
                },
            },

            // == images
            {
                test: /\.(png|jpe?g|gif|ico|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash:8][ext]',
                },
            },

            // == svg (use as components)
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                    },
                ],
            },
        ],
    },

    plugins: [
        // == show progress bar
        new ProgressBarPlugin({
            format: 'build [:bar] ' + ':percent' + ' (:elapsed seconds)',
            clear: false,
        }),

        // == create html files
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            title: META_TITLE,
            meta: {
                description: {
                    name: 'description',
                    content: META_DESCRIPTION,
                },
                keywords: {name: 'keywords', content: META_KEYWORDS},
            },
            favicon: 'src/assets/images/favicons/icon.png',
        }),

        // == fonts preloading
        new FontPreloadPlugin({
            loadType: 'preload',
            crossorigin: true,
            insertBefore: 'head > link:last-child',
        }),

        // == create manifest for pwa
        new WebpackPwaManifest({
            filename: 'manifest.json',
            start_url: '/',
            id: '/',
            display: 'standalone',
            orientation: 'portrait',

            name: APP_NAME,
            short_name: APP_NAME_SHORT,
            description: APP_DESCRIPTION,
            background_color: APP_BACKGROUND_COLOR,
            theme_color: APP_THEME_COLOR,

            crossorigin: 'use-credentials',
            fingerprints: true,
            inject: true,
            includeDirectory: true,
            ios: true,


            icons: [
                {
                    src: path.resolve('src/assets/images/favicons/icon.png'),
                    destination: path.join('assets', 'icons'),
                    sizes: [1024],
                    purpose: 'any',
                },
                {
                    src: path.resolve('src/assets/images/favicons/icon.png'),
                    destination: path.join('assets', 'icons'),
                    sizes: [192, 256, 384, 512],
                    purpose: 'any',
                },
                {
                    src: path.resolve(
                        'src/assets/images/favicons/icon_maskable.png'
                    ),
                    destination: path.join('assets', 'icons'),
                    sizes: [1024],
                    ios: true,
                    purpose: 'maskable',
                },
            ],
        }),

        // == eslint plugin
        new ESLintPlugin({extensions: ['js', 'jsx']}),

        // == allow global constants
        new DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed),
        }),
    ],
};
