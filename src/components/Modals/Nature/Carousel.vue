<template>
    <div
      class="
        absolute
        w-full
        md:w-[70vw]
        h-[60vh]
        md:h-[80vh]
        
        flex
        justify-center
        items-center
      "
    >
      <Carousel
        :resistanceCoef="0"
        :centerMode="true"
        :perPage="1"
        :navigationEnabled="true"
        :paginationEnabled="false"

        
        
      >
        <slide v-for="(item,i) in items" :key="i">
          <img
            class="object-cover bg-center h-[80vh] w-full relative"
            :src="item.path"
            
            
          />
        </slide>
      </Carousel>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from "vue-carousel";
  export default {
    props: ["items"],
  
    components: {
      Carousel,
      Slide,
    },
    data:()=>({
        // 
    })
    
  };
  </script>
  
