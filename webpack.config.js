var path = require('path');

module.exports = {
    output: {
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        root: [
            path.resolve('./bower_components'),
            path.resolve('./src'),
            path.resolve('./src/vue'),
            path.resolve('./src/js')
        ],
        alias: {
            'jquery': path.resolve('./bower_components/jquery/dist/jquery.min.js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    }
}
