'use strict';

module exports = {
    entryL './app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loaderL 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
