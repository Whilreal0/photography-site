<template>
  <nav class="fixed right-5 top-5 md:right-10 md:top-10 z-50 cursor-default">
    <div class="flex items-center cursor-pointer">
      <button id="sidebar"
        class="sidebarBtn md:bg-[#f2f2f2] md:p-1 flex rounded-md"
        @click="openSidebar"
        :class="openModal ? 'invisible' : 'visible'"
      >
        <box-icon class="fill-black" size="sm" name="menu-alt-right"></box-icon>
      </button>
    </div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-in transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-in transition-medium"
      leave-to-class="opacity-0"
    >
      <SidebarBg v-if="isOpen" @close="openSidebar" />
    </transition>
    <SidebarMenu
      @close="openSidebar"
      :class="isOpen ? 'right-0' : 'translate-x-full'"
    />
  </nav>
</template>

<script>
import SidebarMenu from "./SidebarMenu";
import SidebarBg from "./SidebarBg";
export default {
  components: {
    SidebarMenu,
    SidebarBg,
  },
  props: {
    openModal: {
      type: Boolean,
    },
  },
  data: () => ({
    isOpen: false,
  }),
  methods: {
    openSidebar() {
      this.isOpen = !this.isOpen;
      let sidebarBtn = document.querySelector(".sidebarBtn");
      let sitebody = document.body;

      this.isOpen
        ? sidebarBtn.classList.add("hidden")
        : sidebarBtn.classList.remove("hidden");

      this.isOpen
        ? sitebody.classList.add("overflow-hidden")
        : sitebody.classList.remove("overflow-hidden");
    },
  },
 
};
</script>
