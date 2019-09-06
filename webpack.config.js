const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/server.ts',
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/,
                exclude: [
                    /node_modules/
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    }
};