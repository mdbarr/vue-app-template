const { defineConfig } = require('@vue/cli-service');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new MomentLocalesPlugin(),
      new StyleLintPlugin({ files: [ 'src/**/*.{vue,css}' ] }),
    ],
  },
  transpileDependencies: [ 'vuetify' ],
});
