import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'

Vue.use(VueResource);
Vue.config.productionTip = false

//Custom directives
Vue.directive('rainbow',{
  bind(el, bindind, vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2, 8); 
  }
});

//Filters
Vue.filter('snippet', function(value){
  return value.slice(0, 100) + '...';
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')