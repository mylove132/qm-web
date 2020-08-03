import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { UserModule } from './store/modules/user';
import Echart from 'echarts';

//引入element UI组件
Vue.use(ElementUI);
//引入echarts
Vue.prototype.$echarts = Echart;
Vue.config.productionTip = false

// 引入mock数据
if (process.env.NODE_ENV !== 'production') require('../mock/index')

/**
 * 判断是否登录，未登录时重定向到登录页面
 */
router.beforeEach( (to, from, next) => {
  if (to.meta.auth) {
    if (UserModule.token) {
      next();
    } else {
      next ({
        name: "login",
        query: {redirect: to.meta.redirect}
      });
    }
  } else {
    // 不需要cookie
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
