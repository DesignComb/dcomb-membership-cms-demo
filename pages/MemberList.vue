<template>
  <div class="w-full flex flex-col">
    <transition enter-active-class="transition duration-500 ease-in-out transform"
                enter-class="translate-x-24 opacity-0"
                enter-to-class="translate-x-0 opacity-100"
                leave-active-class="transition duration-500 ease-in transform"
                leave-class="translate-x-0 opacity-100"
                leave-to-class="translate-x-24 opacity-0">
      <Nuxt/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MemberList",
}
</script>
