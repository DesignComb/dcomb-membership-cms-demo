<template>
  <div style="height: 21.5rem" class="mt-6 relative rounded-md overflow-hidden shadow-normal">
    <div class="flex justify-between items-end divide-x text-blue-100 dark:text-memberTable-1 bg-gray-8 dark:bg-secondary-600">
      <div class="w-full relative flex text-base font-medium">
        <div @click="$store.commit('home/SET_CHART_DATA_TYPE' , 'level')"
             class="w-1/4 flex justify-center text-black opacity-80 dark:text-white py-4 cursor-pointer border-t-4 border-transparent"
             :class="$store.state.home.chartDataType === 'level' ? 'bg-white dark:bg-secondary-200 border-blue-1 dark:border-blue-2 text-blue-1 dark:text-blue-2' : ''">
          {{ $t("home-chart-title-1") }}
        </div>
        <div @click="$store.commit('home/SET_CHART_DATA_TYPE' , 'gender')"
             class="w-1/4 flex justify-center text-black opacity-80 dark:text-white py-4 cursor-pointer border-t-4 border-transparent"
             :class="$store.state.home.chartDataType === 'gender' ? 'bg-white dark:bg-secondary-200 border-blue-1 dark:border-blue-2 text-blue-1 dark:text-blue-2' : ''">
          {{ $t("home-chart-title-2") }}
        </div>
        <div @click="$store.commit('home/SET_CHART_DATA_TYPE' , 'age')"
             class="w-1/4 flex justify-center text-black opacity-80 dark:text-white py-4 cursor-pointer border-t-4 border-transparent"
             :class="$store.state.home.chartDataType === 'age' ? 'bg-white dark:bg-secondary-200 border-blue-1 dark:border-blue-2 text-blue-1 dark:text-blue-2' : ''">
          {{ $t("home-chart-title-3") }}
        </div>
        <div @click="$store.commit('home/SET_CHART_DATA_TYPE' , 'country')"
             class="w-1/4 flex justify-center text-black opacity-80 dark:text-white py-4 cursor-pointer border-t-4 border-transparent"
             :class="$store.state.home.chartDataType === 'country' ? 'bg-white dark:bg-secondary-200 border-blue-1 dark:border-blue-2 text-blue-1 dark:text-blue-2' : ''">
          {{ $t("home-chart-title-4") }}
        </div>
      </div>
    </div>
    <div class="w-full h-72 flex bg-primary-0 dark:bg-secondary-200">
      <div class="w-1/2 h-full relative">
        <div style="top:38%;left: 51.5%;transform: translate(-50%)"
             class="absolute flex flex-col text-center text-headline-2 font-semibold z-50">
          <span class="text-base font-normal opacity-50">{{ $t("home-chart-circle-number") }}</span>
          <span class="">{{ chartData.total }}</span>
        </div>
        <client-only>
          <home-doughnut-chart :dataset="chartData" :key="$store.state.home.chartDataType + 'DataSet'"
                               class="flex flex-row w-full h-full p-8 2xl:p-10"></home-doughnut-chart>
        </client-only>
      </div>
      <div class="w-1/2 h-full relative pr-8 pt-9">
        <div v-for="(item, index) in pieChart" :key="index" class="flex justify-between items-center">
          <div class="my-2 flex items-center text-base font-normal">
                    <span :style="{backgroundColor: chartColors[index]}"
                          class="inline-flex w-2 h-2 rounded-full mx-1.5 3xl:mx-4"></span>
            <div class="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap opacity-50 w-32">{{
                $t(`${item.Option}`)
              }}
            </div>
          </div>
          <div>
            <span class="text-headline-2 font-semibold pr-2">{{ item.Value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import HomeDoughnutChart from "./chart/homeDoughnutChart";
import { mapGetters } from "vuex";

export default {
  name: "memberChart",
  components: {HomeDoughnutChart},
  props: ["chartData","pieChart"],
  data() {
    return {
      chartID: 1,
      chartColors: ['#2768BF', '#4E83CB', '#88ACDC', '#C2D5ED', '#E9F0F9'],
    }
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
}
</script>

<style lang="scss" scoped>
.el-button--default{
  border: none;
  background: none;
  font-size: 1rem;
  padding: 0;
}
</style>
