<template>
  <div id="app">
    <nav>
      <router-link to="/">Blogs</router-link>
      <router-link to="/showBlogs">View Blogs</router-link>
      <router-link to="/listBlogs">List Blogs</router-link>
    </nav>
    
    <router-view />
  </div>
</template>

<script>
import Blog from './components/Blog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import listBlogs from './components/listBlogs.vue'

export default {
  name: 'app',
  components: {
    Blog
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav{
  padding: 20px 20px 20px 0;
  
}
nav a{
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  font-weight: bold;
  margin-right: 15px;
}
</style>
