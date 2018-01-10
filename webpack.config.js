var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './components/A.js'),

    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react']}
            },
            {
                test: /\.css$/,loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx'],
    }
}