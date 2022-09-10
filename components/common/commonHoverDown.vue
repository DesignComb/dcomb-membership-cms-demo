<template>
    <div class="inline-flex flex-row items-center w-full h-full hover-trigger">
      <slot name="menuName"></slot>
      <span class="text-xl pl-2">
        <i class="bx bx-chevron-down align-middle hover-chevron"></i>
      </span>
      <div class="hover-content w-full absolute z-50 w-full bg-white dark:bg-secondary-200">
        <div class="relative flex flex-wrap overflow-hidden">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "commonHoverDown"
}
</script>

<style scoped lang="scss">
.hover-content{
  visibility: hidden;
  opacity: 0;
  transform: translateY(-2rem);
  transition: all 0.3s ease-in-out;
  left: 0;
  top: 100%;
}
.hover-chevron{
  transition: all 0.3s ease-in-out;
}
.hover-trigger:hover{
  .hover-content{
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
  }
  .hover-chevron{
    transition: all 0.3s ease-in-out;
    transform: rotate(180deg);
  }
}
</style>
