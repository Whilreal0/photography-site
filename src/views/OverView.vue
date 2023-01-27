<template>
  <section class="flex flex-col md:px-16 justify-center items-center text-2xl">
    <Modal v-if="openModal" :openModal="false" :items="items" />
    <h1 class="md:text-3xl mt-5">Overview</h1>
    <div class="grid md:grid-cols-3 gap-4 md:px-10 p-8">
      <div v-for="(item, index) in shuffledItems" :key="index">
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
  
  <script >
import { EventBus } from "@/main";
import Modal from "@/components/Modals/Nature/Modal";
export default {
  components: {
    Modal,
  },
  data: () => ({
    imgZoom: false,
    selectedID: 0,
    openModal: false,
    shuffledItems: [],
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
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
  },
  created() {
    EventBus.$on("closeModal", () => {
      this.showModal();
    });
    this.shuffledItems = this.shuffle(this.items);
  },
};
</script>
  
  <style>
.transform-scale-200 {
  transform: scale(2);
}
</style>