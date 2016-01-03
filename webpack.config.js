module.exports = {
    entry: './stage/app/boot',
    output: {
        path: __dirname + '/src', publicPath: 'src/', filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css']
    },
    module: {
        loaders: [
            {test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/}
        ]
    }
};
