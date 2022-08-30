const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('html')
      .test(/\.htm$/)
      .use('html-loader')
      .loader('html-loader')
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'uNotes'
    }
  },  
  publicPath: 'unfoldingword_unotes_0.0.1'
})

// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('html')
//       .test(/\.html$/)
//       .use('html-loader')
//       .loader('html-loader')
//   }
// };