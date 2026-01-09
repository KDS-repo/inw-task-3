const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/main.jsx',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext]'
          }
        },
        // This one is for Netlify. It needs _redirects to handle SPAs well
        // The rule copies the file with no change
        {
          test: /_redirects$/,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]' // Keeps the original filename
          }
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      // This one is for Netlify. It needs _redirects to handle SPAs well
      // The plugin copies the file with no change
      new CopyPlugin({
        patterns: [
          {
            from: 'public/_redirects',
            to: '.' // . evaluates to the target folder (dist)
          }
        ]
      })
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      port: 5173,
      open: true,
      hot: true,
      historyApiFallback: true // Important for React Router
    },

    devtool: isProduction ? 'source-map' : 'eval-source-map'
  };
};