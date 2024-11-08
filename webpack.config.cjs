const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'exprest-shared.js',
        globalObject: 'this',
        library: {
            name: 'exprest-shared',
            type: 'umd',
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx','.webpack.js', '.web.js', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    }
                ],
                exclude: /node_modules/,
            }
        ]
    },
    devtool : 'inline-source-map',
    externals: [
    ],
    plugins: [
        new TypescriptDeclarationPlugin({
            removeMergedDeclarations: true,
            out:'./exprest-shared.d.ts',
        }),
        new CopyPlugin({
            patterns: [
                { from: "package.json", to: "." },
                { from: "README.md", to: "." },
                { from: "LICENSE.md", to: "." },
            ],
        }),
    ],
};