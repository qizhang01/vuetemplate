import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store' // vuex配置

import 'assets/css/index.scss'
// 常用组件在这注册。即可实现按需加载，又不必每个页面调用Vue.use。
// Vue.use(Button).use(MenuBar)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
