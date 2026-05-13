const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",   // 👈 LÄGG TILL DEN HÄR

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                context: __dirname + '/src/',
                from: '*.html'
            }]
        })
    ]
};