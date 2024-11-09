var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.js`, // Your entry file
  output: {
    filename: 'bundle.js', // Output file name
    path: DIST_DIR, // Output directory
    publicPath: "/",
  },

  devServer: {
    historyApiFallback: true, // Support for single-page apps (SPA)
  },

  module: {
    rules: [
      // Babel loader for JS/JSX files
      {
        test: /\.(js|jsx)$/,  // Adjusted regex to match .js and .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-transform-runtime", {
                "regenerator": true
              }]
            ]
          }
        }
      },
      // CSS loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // URL loader for images
      {
        test: /\.(jpe?g|gif|png)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // File size limit for inlining
            }
          }
        ]
      },
      // SVGR loader for SVGs as React components
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['preact', 'env'],
            },
          },
          {
            loader: '@svgr/webpack',
            options: { babel: false },
          }
        ],
      }
    ]
  },
};