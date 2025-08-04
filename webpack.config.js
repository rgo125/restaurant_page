const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // or "production"
  entry: "./src/index.js", // main JS file
  output: {
    filename: "main.js", // output bundle name
    path: path.resolve(__dirname, "dist"), // absolute path to output
    clean: true, // clears the output folder before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // if file ends in .css
        use: ["style-loader", "css-loader"], // loaders to handle it
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // HTML template
    }),
  ],
  devtool: "source-map", // helpful for debugging
};
