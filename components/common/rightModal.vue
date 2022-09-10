<template>
  <keep-alive>
    <transition enter-active-class="transition duration-500 ease-in-out transform"
                enter-class="translate-x-24 opacity-0"
                enter-to-class="translate-x-0 opacity-100"
                leave-active-class="transition duration-300 ease-in transform"
                leave-class="translate-x-0 opacity-100"
                leave-to-class="translate-x-24 opacity-0">
      <div v-if="$store.state.toggle.openRightModal"
           style="min-width:480px;z-index: 100;box-shadow: -6px 0 10px 0 #00000014;"
           class="w-1/4 h-screen overflow-hidden fixed right-0 top-0 bg-primary-0 dark:bg-secondary-200">
      <span
        @click="$store.commit('toggle/SET_OPEN_RIGHT_MODAL')"
        class="absolute z-50 right-4 top-5 text-4xl cursor-pointer hover:opacity-60">
      <i class="bx bx-x"></i>
    </span>
        <slot name="title"></slot>
        <slot name="content"></slot>
      </div>
    </transition>
  </keep-alive>

</template>

<script>
export default {
  name: "rightModal",
}
</script>
