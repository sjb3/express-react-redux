'use strict';

module.exports = {
  entry: './public/counterApp.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
        {
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
          }
    ]
  }
}
