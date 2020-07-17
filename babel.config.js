/*
 * @Author: bucai
 * @Date: 2020-07-17 11:09:00
 * @LastEditors: bucai
 * @LastEditTime: 2020-07-17 11:09:54
 * @Description: 
 */ 
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-transform-modules-commonjs'
      // "@babel/plugin-transform-runtime",
      // {
      //   "absoluteRuntime": false,
      //   "corejs": false,
      //   "helpers": true,
      //   "regenerator": true,
      //   "useESModules": false
      // }
    ],
  ],
};