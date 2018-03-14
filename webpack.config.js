var webpack = require('webpack')
var fs = require('fs')
var path = require('path')
var ROOT = path.resolve(__dirname)
var ENV = process.env.ENV

var entry = {
  index: [
    ROOT + '/src/index.tsx'
  ]
}

module.exports = {
  entry: entry,
  devtool: 'eval-source-map',
  output: {
    path: ROOT + '/dist',
    publicPath: '//localhost:8888/dist/',
    filename: '[name].js'
  },
  devServer: {
    inline: true,
    quiet: true,
    contentBase: "./",
    port: 8888
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader']
      },
      {
        test: /\.css$/,
        include: ROOT + '/src',
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'typings-for-css-modules-loader',
          options: {
            modules: true,
            namedExport: true,
            localIdentName: '[local]___[hash:base64:5]'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'components': ROOT + '/src/components',
      'pages': ROOT + '/src/pages',
    }
  }
}