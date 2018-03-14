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
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.ts[x]?$/,
        use: ['babel-loader', 'awesome-typescript-loader']
      },
      {
        test: /\.css$/,
        include: ROOT + '/src',
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
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