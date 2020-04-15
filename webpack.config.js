const path = require('path');
const HtmlwebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin =require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !=='production';
module.exports = {
  
    entry:'./frontend/app.js',
    output:{
        path: path.join(__dirname,'backend/public'),//abre el public y envia ar,js
        filename:'js/bundle.js'// crear el archivo.js
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module:{
        rules:[
           {
            test:/\.css/,
            use:[//style-loader = carga al archivo scrip ** production
                devMode ? 'style-loader' : miniCssExtractPlugin.loader,//minicss = carga los  stylos en sus carpeta local
                'css-loader'
            ]


           }
        ]
    },
    plugins:[ // permite instanciar el html 
        new HtmlwebPackPlugin({
           template:'./frontend/index.html',
           minify:{
               collapseWhitespace:true,//remuve epsacio
               removeComments:true,//comentarios
               removeRedundantAttributes:true,//codigos redundantes
               removeScriptTypeAttributes:true,//atributo scruip
               romoveStyleLinkAttributes:true,//links csss
               useShortDoctype:true
             }        
        }),

        new miniCssExtractPlugin({
            filename:'css/bundle.css'
     })
    ],
    devtool:'source-map'
    
}
/*

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './frontend/app.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    })
  ],
  devtool: 'source-map'
};
*/