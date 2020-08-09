// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '淬炼红心'
        return args
      })
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/clhx-web/'
    : '/'
}