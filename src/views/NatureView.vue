<template>
  <section class="flex flex-col md:px-16 justify-center items-center text-2xl">
    <Modal v-if="openModal" :openModal="false" :items="items" />
    <h1 class="md:text-3xl mt-5">Nature</h1>
    <div class="grid md:grid-cols-3 gap-4 md:px-10 p-8">
      <div v-for="(item, index) in items" :key="index">
        <img
          @click="showModal(index)"
          class="cursor-pointer h-full rounded-sm md:rounded-md"
          :src="item.path"
          
        />
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from "@/main";
import Modal from "@/components/Modals/Nature/Modal";
export default {
  components: {
    Modal,
  },
  data: () => ({
    imgZoom : false,
    selectedID: 0,
    openModal: false,
    items: [
      {
        id: 1,
        path: [require("@/assets/images/Nature/nature.jpeg")],
      },
      {
        id: 2,
        path: [require("@/assets/images/Nature/nature1.jpeg")],
      },
      {
        id: 3,
        path: [require("@/assets/images/Nature/nature2.jpeg")],
      },
      {
        id: 4,
        path: [require("@/assets/images/Nature/nature3.jpeg")],
      },
      {
        id: 5,
        path: [require("@/assets/images/Nature/nature4.jpeg")],
      },
      {
        id: 5,
        path: [require("@/assets/images/Nature/nature5.jpeg")],
      },
    ],
  }),
  methods:{
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
.transform-scale-200{
    transform: scale(2);
}
</style>