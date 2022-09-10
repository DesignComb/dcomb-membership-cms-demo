<template>
  <header class="w-full z-50 sticky">
    <div class="w-full h-20 bg-white dark:bg-secondary-200 flex items-center justify-between mt-0 pl-8 pr-12">
      <div class="flex relative h-full w-full">
        <nuxt-link :to="localePath('/')" class="flex flex-row relative h-full w-20 mx-4 items-center">
            <span class="inline-flex relative w-14 h-14 p-1 items-center justify-center text-lg bg-white rounded-full">
              <img class="text-white w-full h-full"
                   src="../../assets/image/dashboard/dcomb-logo.svg" alt="dcomb-logo">
            </span>
        </nuxt-link>
        <nuxt-link :to="localePath('/Home')"
                   :class="isRouteActive('Home') ? 'bg-gray-200 dark:bg-secondary-100': ''"
                   class="flex flex-row relative h-full pr-8 items-center hover:opacity-80">
          <span class="flex pl-6">Home</span>
        </nuxt-link>
        <nuxt-link :to="localePath('/MemberList')"
                   :class="isRouteActive('MemberList') ? 'bg-gray-200 dark:bg-secondary-100': ''"
                   class="flex flex-row relative h-full pr-8 items-center hover:opacity-80">
          <span class="flex pl-6">Member List</span>
        </nuxt-link>
      </div>

      <div class="flex relative h-full w-full items-center justify-end">
        <div class="py-4 h-full relative">
          <div class="h-full border-r mr-2"></div>
        </div>
        <div class="flex flex-row relative h-full items-center mr-2 cursor-pointer hover:bg-gray-20 dark:hover:bg-secondary-100">
          <common-dropdown id="langSelector" class="pr-6">
            <template #menuName>
              <span class="flex pl-6">
                {{ $i18n.locale.toUpperCase() }}
              </span>
            </template>
            <template #content>
              <div class="w-full flex flex-wrap text-left">
                <label
                  class="cursor-pointer w-full pl-6 py-2 relative hover:bg-gray-20 dark:hover:bg-secondary-100"
                  v-for="(item,index) in $i18n.locales"
                  :key="index"
                  :value="item.code"
                  id="switchLang">
                  <input class="hidden is-checked" type="radio" name="month-checkbox">
                  <nuxt-link
                    class="flex items-center checked-color w-full"
                    :to="switchLocalePath(item.code)"
                    id="switchLangLink"
                  >
                    {{ item.code.toUpperCase() }}
                  </nuxt-link>
                </label>
              </div>
            </template>
          </common-dropdown>
        </div>
        <div @click="$store.commit('toggle/SET_AND_OPEN_RIGHT_MODAL',5)"
             class="text-2xl text-gray-500 ml-2 cursor-pointer hover:opacity-80">
          <i class="bx bx-bell align-middle"></i>
        </div>
        <div @click="$store.commit('SET_THEME',$store.state.theme === 'light' ? 'dark': 'light')" class="text-2xl text-gray-500 mx-8 cursor-pointer hover:opacity-80">
            <span class="flex items-center justify-center h-7 w-7 pb-1">
              <i class="bx" :class="$store.state.theme === 'light' ? 'bx-moon' : 'bx-sun'"/>
            </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import vClickOutside from 'v-click-outside'
import {mapGetters} from 'vuex'
import CommonDropdown from "../common/commonDropdown.vue";
import CommonHoverDown from "../common/commonHoverDown";

export default {
  name: "commonHeader",
  components: {CommonHoverDown, CommonDropdown},
  data() {
    return {}
  },
  methods: {
    isRouteActive(id) {
      return this.$route.path.includes(id)
    },
  },
}
</script>
