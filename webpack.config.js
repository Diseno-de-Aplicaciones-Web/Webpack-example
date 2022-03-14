const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.mjs',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use:  [ 'style-loader', 'css-loader' ] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tareas',
            template: './src/index.html.template'
        })
    ],
    mode: "production"
};