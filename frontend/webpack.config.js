const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  mode:process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry:{
    main:path.resolve(__dirname, 'src/index.js')
  },
  output:{
    path:path.resolve(__dirname, 'build'),
    filename:'[name].[contenthash].js',
    assetModuleFilename:'[name][ext]',
    clean:true
  },
  devtool:'inline-source-map',
  devServer:{
    contentBase:path.resolve(__dirname, 'build'),
    port:5000,
    open:true,
    hot:true,
    watchContentBase:true
  },
  module:{
    rules:[
      {
        test:/\.css$/, use:['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|png|ico|webp|jpg|gif|jpeg)$/, type:'assest/resource'
      },
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
                '@babel/preset-env'
            ]
          }
        }
      }
    ]
  },
  plugins:[
      new HtmlWebpackPlugin({
        title:'Edignite NGO',
        filename:'index.html',
        template:path.resolve(__dirname, 'public/index.html')
      })
  ]
};