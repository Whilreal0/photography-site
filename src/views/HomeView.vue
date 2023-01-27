<template>
  <div class="">
    <HomeCarousel :items="items" />
  </div>
</template>

<script>
import HomeCarousel from "@/components/HomeCarousel";
export default {
  components: {
    HomeCarousel,
  },
  data: () => ({
    items: [],
  }),
  created() {
    this.items = [
      {
        alt: 'nature1',
        path: [require("@/assets/images/nature1.jpeg")],
      },
      {
        alt: 'wedding',
        path: [require("@/assets/images/wedding1.jpeg")],
      },
      {
        alt: 'nature5',
        path: [require("@/assets/images/nature5.jpeg")],
      },
      {
        alt: 'wedding',
        path: [require("@/assets/images/wedding3.jpeg")],
      },
      {
        alt: 'wedding',
        path: [require("@/assets/images/wedding4.jpeg")],
      },
      {
        alt: 'nature',
        path: [require("@/assets/images/nature.jpg")],
      },
    ];
  },
};
</script>

<style>
</style>