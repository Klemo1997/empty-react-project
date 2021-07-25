const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js', '.json', '.tsx', '.scss'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            hash: true, // This is useful for cache busting
            filename: 'index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    globOptions: {
                        ignore: [
                            '**/index.html'
                        ]
                    }
                }
            ]
        }),
        new ESLintPlugin({
            files: [
                'test/',
                'src/',
            ],
            extensions: [
                'tsx', 'ts', 'jsx', 'js',
            ]
        }),
        new StylelintPlugin({
            configFile: '.stylelintrc.json',
            files: 'src/styles/'
        }),
    ]
}