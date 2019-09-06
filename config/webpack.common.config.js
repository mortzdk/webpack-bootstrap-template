const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/**
 * basic webpack config
 * 
 * entry = entrypoint
 * output = after build output
 */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack 4 Starter',
        template: './src/index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
            filename: 'style.[hash].css',
            chunkFilename: '[id].[hash].css'
    }),
    new CopyWebpackPlugin([{
        from:'./src/assets/imgs',
        to:'assets/imgs'
    }]),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
        {
            test: [/.js$/],
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }
        },       
        {
            test: [/.css$|.scss$/],
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: false
                  }
                },
                'css-loader',
                'sass-loader'
              ]
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images'
                }
              }
            ]
          }
    ]
  },

};