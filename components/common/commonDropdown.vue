<template>
  <div @click="open = !open" class="relative flex w-full h-full items-center">
    <slot name="menuName"></slot>
    <span class="text-xl pl-2">
        <i :class="open ? ' rotate-180': ''"
          class="bx bx-chevron-down align-middle transition duration-300 ease-in-out"></i>
    </span>
    <transition enter-active-class="transition duration-500 ease-in-out transform"
                enter-class="-translate-y-24 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-300 ease-in transform"
                leave-class="translate-y-0 opacity-100"
                leave-to-class="-translate-y-4 opacity-0">
      <div v-if="open"  v-click-outside="externalClick"
           style="top:100%"
           class="absolute z-50 w-full bg-white dark:bg-secondary-200">
        <div class="relative flex flex-wrap overflow-hidden">
          <slot name="content" @click="open = false"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";

export default {
  name: "commonDropdown",
  directives: {
    clickOutside: vClickOutside.directive
  },
  data(){
    return{
      open:false
    }
  },
  methods:{
    externalClick(event) {
      this.open = false;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
