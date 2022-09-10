import ElementUI from "element-ui";

export const elementUI = [ElementUI]

export const state = () => ({
	theme: 'light',
	Month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  showCancel:false
})

export const mutations = {
	SET_THEME(state, theme) {
		state.theme = theme;
		localStorage.setItem('theme', theme)
	},
	SET_SHOW_CANCEL(state, val) {
		state.showCancel = val
	},
	SET_SEARCH_WORD(state, val) {
		state.searchWord = val
	},
}
export const actions = {
	initTheme({ commit }) {
	  if(window.localStorage){
      commit('SET_THEME', localStorage.getItem('theme'))
    }
	},
}
export const getters = {
	getTheme: (state) => {
	  return  state.theme
	},
}
