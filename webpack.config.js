const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
        // options: {
        //   transpileOnly: true,
        // },
      },
      {
        test: /\.(c|sc)ss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
      // {
      //   test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'static/'
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /.(png|jpe?g)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         mimetype: 'image/png',
      //         name: '[name].[ext]',
      //         outputPath: 'static/'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico'
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js']
  }
};

module.exports = config;
