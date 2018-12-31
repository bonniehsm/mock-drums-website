const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,    /*Webpack pipes the code in these files through babel-laoder for transforming ES6 to ES5*/
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.html$/,
        use:
          {
            loader: "html-loader"
          }
      },
      {
				test: /\.css$/,
				use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
