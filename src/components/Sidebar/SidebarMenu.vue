<template>
  <aside
    class="
      transform
      top-0
      right-0
      fixed
      h-full
      ease-in-out
      transition-all
      duration-300
      w-[50vw]
      
      md:w-[35vw]
      lg:w-[25vw]
      bg-white
    "
  >
    <!-- <img class="absolute w-[10rem] left-5 md:left-10 top-5 md:top-10" :src="customLogo" alt=""> -->
    <div class="absolute flex items-center justify-between w-full p-3 md:p-10 ">
      <h1 class=" md:text-xl pt-[.2rem] md:pt-0">
        <router-link @click.native="$emit('close')" to="/"> Shutter Dream</router-link>
      </h1>
      <button class="flex p-0 pt[.2]">
        <box-icon
          @click="$emit('close')"
          class="fill-black w-[40px]"
          size="sm"
          name="x"
        ></box-icon>
        
      </button>
    </div>
    <ul
      class="
        flex flex-col
        justify-center
        text-black
        md:items-center
        px-5
        md:px-0
        gap-3.5
        h-full
      "
    >
      <li v-for="(link, i) in links" :key="i" class="">
        <router-link
          class="
            cursor-pointer
            text-black
            px-3
            py-1
            font-semibold
            rounded-md
            uppercase
            focus:bg-gray-200
            active:bg-gray-200
            hover:bg-gray-200
          "
          :to="link.link"
          @click.native="$emit('close')"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Overview",
        link: "/overview",
      },
      {
        name: "Nature",
        link: "/nature",
      },
      {
        name: "Wedding",
        link: "/wedding",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
    customLogo: [require("@/assets/custom-logo.png")],
  }),
  computed: {
    iconSize() {
      if (window.innerWidth < 992) {
        return "19px";
      } else {
        return "md";
      }
    },
  },
};
</script>

<style>
</style>