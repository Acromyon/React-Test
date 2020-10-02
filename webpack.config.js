const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const config = {
    entry: './app/resources/js/main.js',
    output: {
        path: path.resolve(__dirname, 'app/public/static/js'),
        publicPath: 'app/public/static/js/',
        filename: 'bundle.js'
    },
    devServer: {
        openPage: 'app/index.html'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isDev
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: '[local]__[sha1:hash:hex:6]',
                                exportLocalsConvention: 'dashesOnly',
                            }
                        },
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/style.css'
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
};

module.exports = config;