const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  externals: {
    vue: 'Vue',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'schemaRenderForm.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SchemaRenderForm',
    libraryExport: 'SchemaRenderForm',
    libraryTarget: 'window'
  }
};
