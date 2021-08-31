const webpack = require('webpack');
const  ESLintPlugin = require('eslint-webpack-plugin');
const { join } = require('path');

const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['ts', 'js'] }) ];

// module.exports = ({ development }) => ({
//   mode: development ? 'development' : 'production',
//   devtool: development ? 'inline-source-map' : false,
//   entry: {
//     main: './src/index.tsx',
//   },
//   output: {
//     filename: '[name].[contenthash].js',
//     path: path.resolve(__dirname, 'dist'),
//     assetModuleFilename: 'assets/[hash][ext]',
//     publicPath: '/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts(x)?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.(woff(2)?|eot|ttf|otf)$/i,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
//       }
//     ],
//   },
//   devtool: 'eval-source-map',
//   plugins: [
//     ...esLintPlugin(development),
//     new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
//     new HtmlWebpackPlugin({ template: './src/index.html' }),
//     new CopyPlugin({
//       patterns: [{
//         from: 'public',
//         noErrorOnMissing: true,
//       }],
//     }),
//     new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
//   ],
//   resolve: {
//     extensions: ['.ts', '.js', '.tsx'],
//   },
// //   ...devServer(development)
// });
function createConfig({
  target, development
}) {
  // Root of project
  let root = join(__dirname, '../');

  // Source directory
  let src = join(root, 'src');

  // Name of output bundles
  let name = '[name].js'
  // let name = '[hash:16].js';

  // Path for compiled assets
  let dist = join(root, 'dist', target);

  let IS_SERVER = target === 'server';
  let IS_CLIENT = target === 'client';

  return {
    name: target,
    entry: join(src, target),

     mode: 'development',
    // mode: 'production',
    //mode: development ? 'development' : 'production',

    output: {
      path: dist,
      filename: name,
      chunkFilename: name,
    },

    resolve: {
      modules: [
        'node_modules',
        'src'
      ],
      extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },

      plugins: [
        ...esLintPlugin(development),
        new webpack.DefinePlugin({
            IS_CLIENT: JSON.stringify(IS_CLIENT),
            IS_SERVER: JSON.stringify(IS_SERVER),
            'typeof window': JSON.stringify(IS_CLIENT ? 'object' : 'undefined')
      }),
    ],
  };
}

module.exports = {
  createConfig,
};
// export default {
//   createConfig,
// };