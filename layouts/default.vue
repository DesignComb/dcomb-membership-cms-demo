<template>
  <div class="flex bg-primary-100 dark:bg-secondary-100 dark:text-primary-0 transition duration-500 ease-in-out">
    <div class="h-screen"></div>
    <div class="flex flex-col w-full justify-start h-screen overflow-hidden">
      <div class="w-full mx-auto">
        <common-header/>
        <!--給定 h = 定值，使overflow 起作用，可滑動大小定義為(畫面高度 - header高度) -->
        <div id="pageScroll" style="min-height: calc(100vh - 4rem)" class="overflow-auto h-4 px-12 py-6">
          <transition enter-active-class="transition duration-500 ease-in-out transform"
                      enter-class="-translate-x-24 opacity-0"
                      enter-to-class="translate-x-0 opacity-100"
                      leave-active-class="transition duration-500 ease-in transform"
                      leave-class="translate-x-0 opacity-100"
                      leave-to-class="-translate-x-24 opacity-0">
            <Nuxt/>
          </transition>
        </div>
      </div>
    </div>
    <right-modal v-if="$store.state.toggle.rightModalContent === 5">
      <template #title>
        <div class="w-full flex mt-5 pl-4 pr-16">
        <span class="text-headline-2 font-bold pl-1.5 pt-1.5 pb-0.5">
          通知
        </span>
        </div>
      </template>
      <template #content>
        <div class="p-5">
        </div>
      </template>
    </right-modal>
  </div>
</template>
<script>
import 'boxicons/css/boxicons.min.css'
import { mapGetters } from "vuex";
import CommonHeader from "../components/layout/header.vue";
import RightModal from "../components/common/rightModal.vue";


export default {
  components: {
    RightModal,
    CommonHeader
  },
  mounted() {
    this.$store.dispatch('initTheme')
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch:{
    theme(newTheme,oldTheme){
      document.querySelector("html").classList.add(newTheme)
      document.querySelector("html").classList.remove(oldTheme)
    }
  }
}
</script>
<style lang="scss">

</style>
