const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'Development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
});