
export const state = () => ({
  trend: [],

  members:[],

  notifyMsg:[],

  pieChart:[],
  chartDataType:'level',
})

export const mutations = {
  SET_TREND(state,data){
    state.trend = data
  },
  SET_MEMBERS(state,data){
    state.members = data
  },
  SET_NOTIFY_MSG(state,data){
    state.notifyMsg = data
  },
  SET_PIE_CHART(state,data){
    state.pieChart = data
  },
  SET_CHART_DATA_TYPE(state,data){
    state.chartDataType = data
  },
}

export const actions = {
  async getTrend({ commit }){
    commit('SET_TREND', await this.$axios.$get('/api/home/trend.json' ))
  },

  async getMembers({ commit }){
    commit('SET_MEMBERS', await this.$axios.$get('/api/home/members.json' ))
  },

  async getNotifyMsg({ commit }){
    commit('SET_NOTIFY_MSG', await this.$axios.$get('/api/home/notify.json' ))
  },

  async getPieChart({ commit }){
    commit('SET_PIE_CHART', await this.$axios.$get('/api/home/pieChart.json' ))
  },
}

export const getters ={
  chartData(state){
    let data = [], labels = [],total = 0
    state.pieChart[state.chartDataType].forEach((item, index) => {
        data.push(item.Value)
        labels.push(item.Option)
        total += item.Value
    })
    return{
      data:data,
      labels:labels,
      backgroundColor: ['#2768BF', '#4E83CB', '#88ACDC', '#C2D5ED', '#E9F0F9'],
      total:total
    }
  },
  notifyMsgHtml(state){
    return state.notifyMsg.map((item) => {
      return item.replace(/(?:\r\n|\r|\n)/g, '<br>')
    })
  }
}
