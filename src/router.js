 import Vue from 'vue'
 import Router from 'vue-router'
 import Blog from './components/Blog.vue'
 import ShowBlogs from './components/ShowBlogs.vue'
 import listBlogs from './components/listBlogs.vue'

 Vue.use(Router)

 export default new Router({
   routes:[
     {
       path: '/',
       name: 'blog',
       component: Blog
     },
     {
       path: '/showBlogs',
       name: 'showBlogs',
       component: ShowBlogs
     },
     {
       path: '/listBlogs',
       name: 'listBlogs',
       component: listBlogs
     }
   ]
 })