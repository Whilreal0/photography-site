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
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
body {
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    font-family: 'Space Grotesk', sans-serif;
  
}
body::-webkit-scrollbar { 
    display: none; 
}
</style>
