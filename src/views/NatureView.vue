<template>
  <section class="flex flex-col md:px-16 justify-center items-center text-2xl">
    <Modal
      v-if="openModal"
      :openModal="false"
      :items="items"
      :initialSlide="initialSlide"
    />
    <h1 class="md:text-3xl mt-5">Nature</h1>
    <div class="grid md:grid-cols-3 gap-4 md:px-10 p-8">
      <div v-for="(item, index) in items" :key="index">
        <img
          @click="showModal(index)"
          class="cursor-pointer h-full rounded-sm md:rounded-md"
          :src="item.path"
          :alt="item.alt"
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
    initialSlide: 0,
    openModal: false,
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
.transform-scale-200 {
  transform: scale(2);
}
</style>