import Vue from 'vue'
import router from './router'
import App from './App'
// import { Button, Table, TableColumn, Pagination } from 'element-ui'
import 'assets/css/index.css'
// 常用组件在这注册。即可实现按需加载，又不必每个页面调用Vue.use。
// Vue.use(Button).use(Table).use(TableColumn).use(Pagination);
// Vue.use(Button)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
