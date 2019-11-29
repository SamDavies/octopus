
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, './lib/'),
        filename: 'index.js',
        library: 'octopus',
        libraryTarget: 'amd'
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/css', to: '../' }
        ]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false // Enable to remove warnings about conflicting order
        })
    ],
    externals: [
        'react',
        'react-dom',
        'react-popper-tooltip',
        'react-router-dom',
        'styled-components'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/react'],
                    plugins: [
                        'babel-plugin-styled-components'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'resolve-url-loader']
            },
            {
                test: /\.svg$/,
                exclude: [
                    path.resolve(__dirname, 'src/static/images/')
                ],
                use: ['@svgr/webpack']
            },
            {
                test: /\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '50000'
                        }

                    }
                ]
            },
            {
                test: /\.svg?$/,
                exclude: [
                    path.resolve(__dirname, 'src/static/icons/')
                ],
                use: 'url-loader'
            }
        ]
    }
}
