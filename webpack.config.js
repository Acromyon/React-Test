let path = require('path');

let config = {
    entry: './app/resources/js/main.js',
    output:{
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
            }
        ]
    }
};

module.exports = config;