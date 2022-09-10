export const state = () => ({
  Month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

  columnSorted: [
    {id: 'emailColumn', label: 'MemberList-table-2'},
    {id: 'nameColumn', label: 'MemberList-table-3'},
    {id: 'genderColumn', label: 'MemberList-table-4'},
    {id: 'addressColumn', label: 'MemberList-table-5'},
    {id: 'phoneColumn', label: 'MemberList-table-6'},
    {id: 'birthdayColumn', label: 'MemberList-table-7'},
    {id: 'countryColumn', label: 'MemberList-table-8'},
    {id: 'ecPeriodColumn', label: 'MemberList-table-10'},
    {id: 'ecTotalColumn', label: 'MemberList-table-9'},
  ],

  members: [],
  member: '',
  page: {
    current: 0,
    total: 0
  },

  loadingStatus: false,
})

export const mutations = {
  SET_LIST_COLUMN(state, data) {
    state.columnSorted = data
  },
  SET_MEMBER_LIST(state, data) {
    state.members = data
  },
  SET_MEMBER_PAGE(state, {current, total}) {
    state.page.current = current
    if (total > 0) {
      state.page.total = total
    }
  },
  SET_MEMBER(state, data) {
    state.member = data
  },
  TOGGLE_LOADING(state) {
    state.loadingStatus = !state.loadingStatus
  }
}

export const actions = {
  async getMemberList({state, commit}) {
    await commit('TOGGLE_LOADING')
    let data = await this.$axios.$get('/api/memberList/memberList.json')

    data = data.List

    if (state.page.current === 0) {
      await commit('SET_MEMBER_PAGE', {
        current: 1,
        total: Math.ceil(data.length / 10)
      })

    }
    data = data.slice((state.page.current - 1) * 10, state.page.current * 10)

    await commit('SET_MEMBER_LIST', data)
    await commit('TOGGLE_LOADING')
  },
  async getMember({state, commit}, id) {
    let data = state.members.find(item => item.ID === id)
    await commit('SET_MEMBER', data)
  },
}

export const getters = {}
