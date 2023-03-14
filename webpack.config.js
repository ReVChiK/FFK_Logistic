const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    entry:{
        main: resolve(__dirname, './source/assets/scripts/index.js')
    },
    output:{
        path: resolve(__dirname, './dist'),
        filename: './assets/js/[contenthash].js'
    },

    devServer:{
        compress: true,
        port: 3000
    },

    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name: './assets/images/[hash].[ext]'
                        }
                    }
                ]
            },

            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css/[hash].css'
        }),
        new CleanWebpackPlugin(),
        new webpack.AutomaticPrefetchPlugin()
    ]
}