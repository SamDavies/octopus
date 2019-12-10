const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../src/common')
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ],
                include: path.resolve(__dirname, '../src')
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
                include: path.resolve(__dirname, '../src')
            }
        ]
    }
}