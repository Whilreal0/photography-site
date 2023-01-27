<template>
  <section class="flex flex-col md:px-16 justify-center items-center text-2xl">
    <Modal
      v-if="openModal"
      :openModal="false"
      :items="items"
      :initialSlide="initialSlide"
    />
    <h1 class="md:text-3xl mt-5">Overview</h1>
    <div class="grid md:grid-cols-3 gap-4 md:px-10 p-8">
      <div v-for="(item, index) in items" :key="index">
        
        <img class="cursor-pointer rounded-sm md:rounded-md"  @click="showModal(index)" :src="item.path" :alt="item.alt"/>
      </div>
    </div>
  </section>
</template>
  
  <script >
import { EventBus } from "@/main";
import Modal from "@/components/Modals/Overview/Modal";
export default {
  components: {
    Modal,
  },
  data: () => ({
    
    openModal: false,
    
    initialSlide: 0,

    items: [
      {
        alt: "nature",
        path: [require("@/assets/images/Nature/nature.jpeg")],
      },
      {
        alt: "nature1",
        path: [require("@/assets/images/Nature/nature1.jpeg")],
      },
      {
        alt: "nature2",
        path: [require("@/assets/images/Nature/nature2.jpeg")],
      },
      {
        alt: "nature3",
        path: [require("@/assets/images/Nature/nature3.jpeg")],
      },
      {
        alt: "nature4",
        path: [require("@/assets/images/Nature/nature4.jpeg")],
      },
      {
        alt: "nature5",
        path: [require("@/assets/images/Nature/nature5.jpeg")],
      },
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
        this.initialSlide = index

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
.transform-scale-200 {
  transform: scale(2);
}
</style>