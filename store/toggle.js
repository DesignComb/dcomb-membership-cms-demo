export const state = () => ({
  openRightModal:false,
  rightModalContent: 0,
  rightModalPage: ['MemberList-rightModal-Page-1', 'MemberList-rightModal-Page-2', 'MemberList-rightModal-Page-3'],
})

export const mutations = {
  SET_OPEN_RIGHT_MODAL(state) {
    state.openRightModal = !state.openRightModal
  },
  SET_AND_OPEN_RIGHT_MODAL(state, data) {
    state.rightModalContent = data
    state.openRightModal = true
  },
}
