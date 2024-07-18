const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with your entry point
  output: {
    filename: 'client-side-react-bundle.js',
    path: path.resolve(__dirname, 'public'), // Replace with your output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  mode: 'development', // Set the mode to 'development'
  watch: true,
};