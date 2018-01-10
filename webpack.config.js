var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './components/A.js'),

    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        inline: true,
        progress:true,
        contentBase: path.join(__dirname, "public"),
        host:'localhost',
        port:'8090'
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
    plugins: [
        new HtmlWebpackPlugin({
            template:'public/templates/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery:"jquery",
            "Tether": "tether"
        })
    ],
    resolve: {
        extensions: ['.css', '.js', '.jsx'],
    }
}