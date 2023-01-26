<template>
  <div class="" id="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'
export default {
  components:{
    Sidebar,
  }
};
</script>

<style>
body {
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    font-family: 'Space Grotesk', sans-serif;
  
}
body::-webkit-scrollbar { 
    display: none; 
}
</style>
