<template>
  <div id="app">
    <navbar></navbar>
    <breadcrumb></breadcrumb>
    <router-view/>
  </div>
</template>
<script>
import breadcrumb from './components/breadcrumb'
import navbar from './components/navbar'
export default {
  name:'app',
  components:{
    breadcrumb,
    navbar
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>
