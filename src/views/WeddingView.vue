<template>
  <section
    class="wedding flex flex-col md:px-16 justify-center items-center text-2xl"
  >
    <Modal
      v-if="openModal"
      :openModal="false"
      :items="items"
      :initialSlide="initialSlide"
    />
    <h1 class="md:text-3xl mt-5">Wedding</h1>
    <div class="grid md:grid-cols-3 gap-4 md:px-10 p-8">
      <div v-for="(item, index) in items" :key="index">
        <img
          class="cursor-pointer rounded-sm md:rounded-md"
          @click="showModal(index)"
          :src="item.path"
          :alt="item.alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from "@/main";
import { Carousel, Slide } from "vue-carousel";
import Modal from "@/components/Modals/Wedding/Modal";
export default {
  components: {
    Carousel,
    Slide,
    Modal,
  },
  data: () => ({
    initialSlide: 0,
    openModal: false,
    items: [
      {
        alt: "wedding",
        path: [require("@/assets/images/wedding/wedding.jpeg")],
      },
      {
        alt: "wedding1",
        path: [require("@/assets/images/wedding/wedding1.jpeg")],
      },
      {
        alt: "wedding2",
        path: [require("@/assets/images/wedding/wedding2.jpeg")],
      },
      {
        alt: "wedding3",
        path: [require("@/assets/images/wedding/wedding3.jpeg")],
      },
      {
        alt: "wedding4",
        path: [require("@/assets/images/wedding/wedding4.jpeg")],
      },
      {
        alt: "wedding5",
        path: [require("@/assets/images/wedding/wedding5.jpeg")],
      },
    ],
  }),
  methods: {
    showModal(index) {
      this.initialSlide = index;

      this.openModal = !this.openModal;
      let sitebody = document.body;

      this.openModal
        ? sitebody.classList.add("overflow-hidden")
        : sitebody.classList.remove("overflow-hidden");

      let sidebarBtn = document.querySelector(".sidebarBtn");

      if (this.openModal == true) {
        sidebarBtn.classList.add("hidden");
      } else {
        sidebarBtn.classList.remove("hidden");
      }
    },
  },
  created() {
    EventBus.$on("closeModal", () => {
      this.showModal();
    });
  },
};
</script>

<style>
.scrollbar-none::-webkit-scrollbar {
  width: 0.2em;
  background-color: #f5f5f5;
}
.scrollbar-none::-webkit-scrollbar-thumb {
  background-color: #000000;
}
</style>