<template>
  <div style="height: 14.5rem" class="rounded-md w-full flex bg-primary-0 dark:bg-secondary-200">
    <swiper ref="mySwiper" class="swiper flex" :options="swiperOption2" style="border: none;">
      <swiper-slide id="inviteBanner" class="flex w-full">
        <div class="w-1/2 flex flex-col justify-between items-start p-8 px-8 3xl:px-12">
          <span class="text-headline-3 font-medium">
            {{ $t("home-banner-2-title") }}
          </span>
          <div class="h-full flex flex-col justify-between">
            <p class="text-body-2 font-normal whitespace-nowrap opacity-75 tracking-20 mt-4">
              {{ $t("home-banner-2-description-1") }} <br>
              {{ $t("home-banner-2-description-2") }}
            </p>
          </div>
        </div>
        <div style="font-size: 8rem;" class="w-1/2 flex justify-center items-center text-purple-0">
          <i class="bx bx-calendar-heart"/>
        </div>
      </swiper-slide>
      <swiper-slide id="freeTrialBanner" class="flex w-full">
        <div class="w-1/2 flex flex-col justify-between items-start p-8 px-8 3xl:px-12">
          <span class="text-lg font-bold">{{ $t("home-banner-1-title") }}</span>
          <div class="h-full flex flex-col">
            <p class="text-body-2 font-normal whitespace-nowrap opacity-75 tracking-20 mt-4">
              {{ $t("home-banner-1-description-1") }} <br>
              {{ $t("home-banner-1-description-2") }}
            </p>
          </div>
        </div>
        <div style="font-size: 8rem;" class="w-1/2 flex justify-center items-center text-blue-1">
          <i class="bx bx-gift"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination2" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "bannerSwiper",
  data() {
    return {
      swiperOption2: {
        speed: 2000,
        loop: true,
        pagination: {
          el: '.swiper-pagination.swiper-pagination2',
          clickable: false
        },
        autoplay: {
          delay: 2500,
        },
      },
    }
  },
  computed: {
    ...mapGetters({theme: "getTheme"}),
  },
}
</script>

<style scoped>
.swiper-pagination:deep .swiper-pagination-bullet-active {
  background: #6F6E6F;
}
</style>

<style lang="scss">
.dark {
  .swiper-pagination-bullet-active {
    background: #2F639E !important;
    opacity: 1;
  }

  .swiper-pagination-bullet {
    background: #CAD0D3;
    opacity: 1;
  }
}
</style>
