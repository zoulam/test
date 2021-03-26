import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import store from './store'
import router from './router'
import '@/custom-component' // 注册自定义组件
import '@/assets/iconfont/iconfont.css' // iconfont
import '@/styles/animate.css' // 动画库
import 'element-ui/lib/theme-chalk/index.css' // 黑板主题
import '@/styles/reset.css' // 移除浏览器默认样式

Vue.use(ElementUI, { size: 'small' }) // 使用elementui，配置尺寸为small
Vue.config.productionTip = false // 关闭警告，默认是true

new Vue({
    el: '#app',
    router,
    store,
    render: createElement => createElement(App),
})
