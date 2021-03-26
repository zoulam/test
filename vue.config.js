module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/visual-drag-demo/' : './',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '可视化组件demo展示'
            return args
        })
    },
}