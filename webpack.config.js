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
};