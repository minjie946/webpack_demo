/**
 * @description 公共的配置
 * @author minjie
 * @Date 2021-12-20 13:14
 * @LastEditTime 2022-05-12 15:03
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import webpack, { Configuration } from 'webpack'
import webpackConfig from '../webpack.config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { resolve } from '../util'

export const ConfigCommon = ({ mode, target }: Configuration): Configuration => {
  // 是正式环境
  const isPro: boolean = mode === 'production'
  const config: Configuration = {
    target: target || 'web',
    mode,
    entry: webpackConfig.entry,
    output: {
      filename: isPro ? 'js/[name].[chunkhash:8].js' : '[name].[hash:8].js',
      publicPath: isPro ? './' : '/',
      path: resolve(webpackConfig.outfolder || 'dist'),
      ...webpackConfig.output
    },
    plugins: [
      new HtmlWebpackPlugin(webpackConfig.html),
      new MiniCssExtractPlugin({ filename: isPro ? 'css/[name].[contenthash:8].css' : 'css/[name].css' }),
      new webpack.DefinePlugin(webpackConfig.definePlugin),
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/images/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/fonts/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            isPro ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.less$/i,
          use: [
            isPro ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  exclude: /node_modules/,
                  // modifyVars: theme,
                  javascriptEnabled: true
                }
              }
            }
          ]
        },
        {
          test: /\.(ts|tsx)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: [
            {
              loader: 'eslint-loader',
              options: {
                cache: true,
                formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
              }
            }
          ]
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@assets': resolve('src/assets'),
      },
      extensions: ['.ts', '.tsx', '.js', '.less', '.css']
    }
  }
  return config
}
