

const path = require('path');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports = {


  resolve: {
    alias: {
     
      component: path.resolve(__dirname, 'src/component/')
    }
  }
,
  


    entry: {
        vendor: "./src/index.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        index:"index.html",
        compress: true,
        port: 9001
      },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
           
            loader:'file-loader',
            
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env','@babel/preset-react']
                }
              }
            },
            {
              test: /\.s?css$/i,
              use: [
                // Creates `style` nodes from JS strings
                {  loader: MiniCssExtractPlugin.loader},
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ],
              
            },
           
          ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    },
}