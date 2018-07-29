import Vue from 'vue'
import App from './App'
// 5.0 引入路由模块
import router from './router'


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


// 全局引入的mint-ui   
import MintUI from 'mint-ui'
// 注册mint-ui
Vue.use(MintUI)
// 引入mint-ui的样式
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'

// 引入拓展图标类
import './lib/mui/css/icons-extra.css'

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://localhost:5000/';
// Vue.http.options.root = 'http://vue.studyit.io';

// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;


Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 6.0 注册路由
  router,
  // 这连句话类似于  render: c => c(App)
  // components: { App },
  // template: '<App/>'

  render: c => c(App)
})
