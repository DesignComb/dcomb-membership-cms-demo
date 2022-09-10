<template>
  <div>
    <div class="w-full relative mt-4 pl-4 pr-16">
      <div class="w-full relative">
        <div @click="open = !open"
             class="relative flex justify-between items-center border border-gray-300 rounded cursor-pointer">
        <span class="text-headline-2 font-bold pl-4 pt-1.5 pb-0.5">
          {{ $t($store.state.toggle.rightModalPage[$store.state.toggle.rightModalContent]) }}
        </span>
          <span class="text-3xl pr-2">
          <i :class="open ? 'rotate-180':''"
             class="bx bx-chevron-down align-middle transform transition duration-300 ease-in-out"></i>
        </span>
        </div>
        <transition enter-active-class="transition duration-500 ease-in-out transform"
                    enter-class="-translate-y-24 opacity-0"
                    enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-300 ease-in transform"
                    leave-class="translate-y-0 opacity-100"
                    leave-to-class="-translate-y-4 opacity-0">
          <div v-if="open" v-click-outside="externalClick"
               style="box-shadow: 0 0 4px 0 #00000040;"
               class="absolute w-full z-50 rounded-sm bg-white dark:bg-secondary-200">
            <div class="relative flex flex-wrap overflow-hidden text-left">
              <div v-for="(item,index) in $store.state.toggle.rightModalPage" :key="index"
                   @click="handleSelect(index)" class="cursor-pointer w-full pl-4 py-2 relative hover:bg-gray-200 dark:hover:opacity-80">
                {{ $t( item ) }}
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";

export default {
  name: "selector",
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    externalClick(event) {
      this.open = false;
    },
    handleSelect(payload){
      this.open = false
      this.$store.commit('toggle/SET_AND_OPEN_RIGHT_MODAL',payload)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-triangle {
  position: absolute;
  border-color: white transparent transparent transparent;
  border-style: solid solid solid solid;

  /* 設定邊框依上、下；左右，各為一群組，相同群組須設定為相同尺寸，調整尺寸可拼湊出任意形狀的三角形 */
  border-width: 10px 8px 10px 8px;
  transform: rotate(180deg);
  top: -1rem;
  left: 50%;
  /* 設定 width、height 可更好理解原理 */
  height: 0px;
  width: 0px;
}

.dark {
  .custom-triangle {
    border-color: #353F4B transparent transparent transparent;
  }
}

.custom-position {
  top: auto;
  right: 0;
}
</style>
