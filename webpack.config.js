const pjson = require('./package.json');
const TerserPlugin = require("terser-webpack-plugin")

// 'production' か 'development' を指定
const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,
    entry: './src/js/index.js',

    output: {
        path: `${__dirname}/dist`,
        filename: enabledSourceMap ? "qkanim.js" : "qkanim.min.js",
    },

    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: enabledSourceMap,
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.js'],
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: {
                    condition: enabledSourceMap ? false : /^\**!|@preserve|@license|@cc_on/i,
                    banner: () => {
                        return `QkAnim v${pjson.version} | ${pjson.author.name} | https://qkanim.com/LICENSE`;
                    },
                },
                terserOptions: {
                    format: {
                        comments: enabledSourceMap
                    },

                    compress: {
                        drop_console: enabledSourceMap, // console.log を出力するかどうか
                    },
                },
            }),
        ],
    }
};