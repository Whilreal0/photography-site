<template>
  <section
    class="wedding flex flex-col md:px-16 justify-center items-center text-2xl"
  >
    <Modal
      v-if="openModal"
      :openModal="false"
      :items="items"
      
      :selectedID="selectedID"
    />
    <h1 class="md:text-3xl mt-5">Wedding</h1>
    <div class="grid md:grid-cols-3 gap-4 md:px-10 p-8">
      <div v-for="(item, index) in items" :key="index">
        <img
          @click="showModal(index)"
          
          class="cursor-pointer rounded-sm md:rounded-md"
          :src="item.path"
          alt=""
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
    selectedID: 0,
    openModal: false,
    items: [
      {
        id: 1,
        path: [require("@/assets/images/wedding/wedding.jpeg")],
      },
      {
        id: 2,
        path: [require("@/assets/images/wedding/wedding1.jpeg")],
      },
      {
        id: 3,
       path: [require("@/assets/images/wedding/wedding2.jpeg")],
      },
      {
        id: 4,
        path: [require("@/assets/images/wedding/wedding3.jpeg")],
      },
      {
        id: 5,
        path: [require("@/assets/images/wedding/wedding4.jpeg")],
      },
      {
        id: 5,
        path: [require("@/assets/images/wedding/wedding5.jpeg")],
      },

    ],
  }),
  methods: {
    showModal(index) {
      this.selectedID = index;
      
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