<template>
  <div class="w-full flex flex-col pb-16">
      <div class="flex flex-wrap w-full justify-start">
        <div class="w-full lg:w-7/12 text-left">
          <member-trend :memberAnalysis="trend.member" :revenueAnalysis="trend.revenue"/>
          <member-table :memberData="members.new" :isLoading="isLoading" :leaveMemberData="members.left"/>
        </div>
        <div class="w-full lg:w-5/12 pl-0 lg:pl-6 mt-2 lg:mt-0 text-left">
          <notify-swiper :notifyMsg="notifyMsg"/>
          <banner-swiper/>
          <member-chart :chartData="chartData" :pieChart="pieChart[chartDataType]"/>
        </div>
      </div>
  </div>
</template>

<script>
import HomeLineChart from "../components/home/chart/homeLineChart.vue";
import HomeDoughnutChart from "../components/home/chart/homeDoughnutChart";
import memberTrend from "../components/home/memberTrend";
import MemberTable from "../components/home/memberTable";
import MemberChart from "../components/home/memberChart";
import BannerSwiper from "../components/home/bannerSwiper";
import {mapGetters, mapState} from "vuex";
import NotifySwiper from "../components/home/notifySwiper";

export default {
  name: "Home",
  components: {
    NotifySwiper,
    BannerSwiper,
    MemberChart,
    MemberTable,
    memberTrend,
    HomeDoughnutChart,
    HomeLineChart
  },
  async asyncData({store}) {
    await store.dispatch('home/getTrend')
    await store.dispatch('home/getMembers')
    await store.dispatch('home/getNotifyMsg')
    await store.dispatch('home/getPieChart')
  },
  data() {
    return {
      isAlert: false,
      isLoading: false,
    }
  },
  methods: {
    handleMemberStatus() {
      this.showNew = !this.showNew;
    },
  },
  computed: {
    ...mapState('home', {
      trend: state => state.trend,
      members: state => state.members,
      pieChart: state => state.pieChart,
      chartDataType: state => state.chartDataType,
    }),
    ...mapGetters({
      chartData: 'home/chartData',
      notifyMsg: 'home/notifyMsgHtml'
    })
  },
}
</script>

