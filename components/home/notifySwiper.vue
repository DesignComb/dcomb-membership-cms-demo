<template>
  <div style="height: 6.5rem"
       class="w-full flex justify-center items-center bg-primary-0 dark:bg-secondary-200 rounded-md shadow-normal mb-6">
    <swiper key="notify" ref="mySwiper" class="swiper flex w-full" :options="swiperOption" style="border: none;">
      <swiper-slide v-for="(item,index) in notifyMsg" :key="index" class="flex w-full">
        <div class="w-full h-full flex items-center pt-4 pb-8">
                <span
                  class="w-10 h-10 inline-flex ml-6 my-2 items-center justify-center text-base font-normal text-white bg-gray-400 rounded-full p-2">
                    <i class="bx bx-bell"></i>
                </span>
          <span v-html="item" class="px-4"></span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination1" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "notifySwiper",
  props: ["notifyMsg"],
  data() {
    return {
      swiperOption: {
        speed: 2000,
        loop: true,
        pagination: {
          el: '.swiper-pagination.swiper-pagination1',
          clickable: false
        },
        autoplay: {
          delay: 2500,
        },
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-pagination:deep .swiper-pagination-bullet-active {
  background: #6F6E6F;
}
.dark-swiper-pagination:deep .swiper-pagination-bullet {
  background: #CAD0D3 !important;
}

</style>
