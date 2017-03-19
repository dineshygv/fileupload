module.exports = [{
    entry: "./src/app.js",
    output: {
        filename: "build/bundle.js"
    },
    debug: true,
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}];