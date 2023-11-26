const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      home: "./src/pages/home/index.js",
      product: "./src/pages/product/index.js",
      signIn: "./src/pages/signIn/index.js",
      user: "./src/pages/user/index.js",
      user_changepassword: "./src/pages/user/user_changepassword.js",
      user_donmua: "./src/pages/user/user_donmua.js",
      shopping_cart: "./src/pages/shopping_cart/index.js",
      cart_delivery: "./src/pages/shopping_cart/cart_delivery.js"
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    alias: {
      src : path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages/home/index.html'), // Đường dẫn tới file HTML template cho trang 1
      filename: 'index.html', // Tên file HTML cho trang 1
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages/product/index.html'), // Đường dẫn tới file HTML template cho trang 2
      filename: 'product.html', // Tên file HTML cho trang 2
      chunks: ['product'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages/signIn/index.html'), // Đường dẫn tới file HTML template cho trang 1
      filename: 'signIn.html', // Tên file HTML cho trang 1
      chunks: ['signIn'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages/user/index.html'), // Đường dẫn tới file HTML template cho trang 1
      filename: 'user.html', // Tên file HTML cho trang 1
      chunks: ['user'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages/user/user_changepassword.html'), // Đường dẫn tới file HTML template cho trang 1
      filename: 'user_changepassword.html', // Tên file HTML cho trang 1
      chunks: ['user_changepassword'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages/user/user_donmua.html'), // Đường dẫn tới file HTML template cho trang 1
      filename: 'user_donmua.html', // Tên file HTML cho trang 1
      chunks: ['user_donmua'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages/shopping_cart/index.html'), // Đường dẫn tới file HTML template cho trang 1
      filename: 'shopping_cart.html', // Tên file HTML cho trang 1
      chunks: ['shopping_cart'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages/shopping_cart/cart_delivery.html'), // Đường dẫn tới file HTML template cho trang 1
      filename: 'cart_delivery.html', // Tên file HTML cho trang 1
      chunks: ['cart_delivery'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Áp dụng loader cho các file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: {
          loader: 'babel-loader', // Sử dụng Babel để biên dịch ES6/ES7 sang ES5
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        generator: {
          filename: 'images_pages/[name][ext]',
        },
      },
      
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
  },

};
