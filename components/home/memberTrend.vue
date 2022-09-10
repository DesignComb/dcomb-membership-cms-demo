<template>
  <div class="w-full h-80 bg-primary-0 dark:bg-secondary-200 rounded-md shadow-normal">
    <div
      class="w-full h-full flex flex-wrap items-center divide-x dark:divide-memberTrend-0">
      <div class="w-1/2 flex flex-wrap items-center relative px-4 3xl:px-8">
        <div class="w-full flex flex-wrap">
          <div class="w-full flex items-center">
              <span
                class="w-10 h-10 inline-flex m-2 items-center justify-center text-xl text-white bg-purple-1 rounded-full p-2.5">
                <i class="bx bx-group"></i>
              </span>
            <div class="flex flex-col text-left pl-4">
              <div class="text-headline-3 font-medium pt-1">{{ $t("home-analyze-chart-1-title") }}</div>
            </div>
          </div>
        </div>
        <div class="w-full px-1 3xl:px-4 py-5">
          <client-only>
            <home-line-chart
              :dataset="memberAnalysis"
              :option="option"
              :colors="colors"
              :key="'memberAnalysis'+keyNum"
              class="h-28 flex flex-row">
            </home-line-chart>
          </client-only>
        </div>
        <div class="w-full pl-4 pt-4 flex justify-between">
          <div class="font-medium text-headline-3">
            <span class="text-body-2 font-normal opacity-70">Today</span>
            <span class="pl-2">{{ memberAnalysis.data[memberAnalysis.data.length - 1] }}</span>
            <span class="font-medium text-headline-3 text-yellow-600">( {{
                memberAnalysis.diffYesterday > 0 ? '+' : '–'
              }}</span>
            <span class="font-medium text-headline-3 text-yellow-600">{{
                Math.abs(memberAnalysis.diffYesterday)
              }} )</span>
            <span class="text-body-2 font-normal opacity-70">{{ $t("home-analyze-chart-unit") }}</span>
          </div>
        </div>
      </div>
      <div class="w-1/2 flex flex-wrap items-center relative px-4 3xl:px-8">
        <div class="w-full flex flex-wrap">
          <div class="w-full flex items-center">
            <span class="flex items-center justify-center bg-blue-0 h-10 w-10 m-2 p-2.5 rounded-full text-lg">
              <svg-icon class="h-full w-full" name="zap-white"/>
            </span>
            <div class="flex items-center text-left pl-4">
              <div class="text-headline-3 font-medium pt-1">{{ $t("home-analyze-chart-2-title") }}</div>
            </div>
          </div>
        </div>
        <div class="w-full pl-0 pr-1 3xl:pl-3 3xl:pr-4 py-5">
          <client-only>
            <home-line-chart
              :dataset="revenueAnalysis"
              :option="option2"
              :colors="colors"
              :key="'revenueAnalysis'+keyNum"
              class="h-28 flex flex-row">
            </home-line-chart>
          </client-only>
        </div>
        <div class="w-full pl-2 pt-4 flex justify-between">
          <div class="font-medium text-headline-3">
            <span class="text-body-2 font-normal opacity-70">Today</span>
            <span class="pl-2">{{ revenueAnalysis.data[memberAnalysis.data.length - 1] }}</span>
            <span class="font-medium text-headline-3 text-blue-0 dark:text-yellow-600">( {{
                revenueAnalysis.diffYesterday > 0 ? '+' : '–'
              }}</span>
            <span class="font-medium text-headline-3 text-blue-0 dark:text-yellow-600">{{
                Math.abs(revenueAnalysis.diffYesterday)
              }} )</span>
            <span class="text-body-2 font-normal opacity-70">USD</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeLineChart from "./chart/homeLineChart";
import HomeDoughnutChart from "./chart/homeDoughnutChart";
import {mapGetters} from "vuex";

export default {
  name: "memberTrend",
  components: {HomeDoughnutChart, HomeLineChart},
  props: ["memberAnalysis", "revenueAnalysis", "currency"],
  data() {
    return {
      option: {
        color1: 'rgba(163, 132, 206, 1)',
        color2: 'rgba(163, 132, 206, 0.01)'
      },
      option2: {
        color1: 'rgba(3, 133, 182,1)',
        color2: 'rgba(3, 133, 182, 0.01)'
      },
      colors: {
        borderColor: '',
        fontColor: ''
      },
      keyNum: 0,
    }
  },
  mounted() {
    this.colors.borderColor = this.theme === 'dark' ? '#ffffff59' : '#70707059'
    this.colors.fontColor = this.theme === 'dark' ? '#FFFFFF' : '#06040C'
  },
  watch: {
    theme() {
      this.colors.borderColor = this.theme === 'dark' ? '#ffffff59' : '#70707059'
      this.colors.fontColor = this.theme === 'dark' ? '#FFFFFF' : '#06040C'
      this.keyNum++
    }
  },
  computed: {
    ...mapGetters({theme: "getTheme"}),
  },
}
</script>

<style scoped>
.el-button--default {
  border: none;
  background: none;
  font-size: 1rem;
  padding: 0;
}
</style>
