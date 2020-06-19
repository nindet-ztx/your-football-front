const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        publicPath: '/',
        globalObject: 'this'
    },
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: 3002,
    },
    module: {
        rules: [
            {
                test: /\.(m?js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|ico|png|gif|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                    'img-loader',
                ],
            },{
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            }, {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['eslint-loader'],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('./env.js')
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new CopyWebpackPlugin([
            { from: 'src/img', to: 'img' },
        ]),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['bundle.js'],
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
