const TerserPlugin = require('terser-webpack-plugin');
const hash = new Date().getTime();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  mode:process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry:{
    main:path.resolve(__dirname, 'src/index.js')
  },
  output:{
    path:path.resolve(__dirname, 'build'),
    filename: `static/js/[name].${hash}.js`,
    clean:true
  },
  devtool:'inline-source-map',
  devServer:{
    port:5000,
    open:true,
    hot:true
  },
  module:{
    rules:[
      {
        test:/\.css$/, use:['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/inline',
    },
      {
        test: /\.(svg|png|ico|webp|jpg|gif|jpeg|JPG|jfif|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[ext]',
        },
      },
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
                '@babel/preset-env',
                '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },

  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
      }),
    ],
  },

  plugins:[
      new HtmlWebpackPlugin({
        title:'Edignite NGO',
        filename:'index.html',
        template:path.resolve(__dirname, 'public/index.html')
      })
  ]
};