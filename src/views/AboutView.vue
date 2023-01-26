<template>
  <section class="bg-red-300 flex flex-col items-center md:px-16 p-0">
    <h1 class="mt-5 text-2xl font-semibold md:text-3xl">About Us</h1>
    <div class="md:flex flex-row w-full md:px-10 p-8">
      <img class="object-contain max-h-[300px]" :src="imagePath" alt="" />
      <div class=" mt-10 md:ml-10">
        <h2 class="line-break">
          I Am <span class=" font-semibold">Whilmer Realigue</span>, A Front-end Web Developer
        </h2>
        <h2>
            All Images Here Are Copyright Free.
        </h2>
      </div>
    </div>
    <footer class=" p-4 text-black text-center absolute bottom-0">
    Copyright © {{ currentYear }}, {{ name }}
  </footer>
  </section>
</template>

<script>
export default {
  data: () => ({
    name: 'Whilmer Realigue',
    imagePath: [require("@/assets/About.jpeg")],
    currentYear : new Date().getFullYear()
  }),
};
</script>

<style>
</style>