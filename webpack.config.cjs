const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'), // Настройте алиасы по вашей структуре проекта
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // Добавьте экземпляр CopyWebpackPlugin
    new CopyWebpackPlugin({
      patterns: [
        { from: 'index.html', to: 'index.html' }, // Копируем index.html в корень dist
        { from: 'src/images', to: 'src/images' }, // Копируем содержимое папки images в dist/images
        { from: 'src/styles', to: 'src/styles' }, // Копируем содержимое папки styles в dist/styles
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000, // Укажите порт, на котором будет работать сервер
  },
};
