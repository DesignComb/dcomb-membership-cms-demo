<template>
  <div class="h-full overflow-x-hidden overflow-y-auto pb-12">
    <div class="w-full flex flex-col justify-around">
      <div class="w-full mt-6 flex flex-wrap items-start px-4">
        <div
          class="w-full inline-flex items-center justify-between pl-4 border dark:bg-secondary-700 rounded-md px-4 pt-4 pb-3.5">
          <span class="flex justify-center items-center text-2xl mr-2">
              <i class="text-blue-0 bx bx-search"/>
          </span>
          <input v-model="searchWord" class="w-full search-input text-base dark:text-primary-0 bg-transparent"
                 :placeholder="$t('MemberList-search')"
                 @keyup.enter="$store.commit('SET_SEARCH_WORD',searchWord)"/>
        </div>
      </div>
      <div class="w-full mt-4 flex flex-wrap items-start px-4">
        <div
          class="w-full text-left text-body-2 bg-gray-300 dark:bg-secondary-400 text-gray-0 font-medium tracking-30 px-4 pt-1.5 pb-0.5 rounded-md my-2.5">
          {{ $t('MemberList-filter-Gender') }}
        </div>
        <checkbox-filter class="w-full" :type="'gender'" :options="genders" :key="'genderFilter'+ renderNum"/>
      </div>
      <div class="w-full mt-4 flex flex-wrap items-start px-4">
        <div
          class="w-full text-left text-body-2 bg-gray-300 dark:bg-secondary-400 text-gray-0 font-medium tracking-30 px-4 pt-1.5 pb-0.5 rounded-md my-2.5">
          {{ $t('MemberList-filter-Country') }}
        </div>
        <checkbox-filter class="w-full" :type="'country'" :options="countries" :key="'countryFilter'+ renderNum"/>

      </div>
      <div class="w-full mt-4 flex flex-wrap items-start px-4">
        <div
          class="w-full text-left text-body-2 bg-gray-300 dark:bg-secondary-400 text-gray-0 font-medium tracking-30 px-4 pt-1.5 pb-0.5 rounded-md my-2.5">
          {{ $t('MemberList-filter-Birthday') }}
        </div>
        <checkbox-filter class="w-full" :type="'birthdayMonths'" :options="$store.state.Month" :key="'birthFilter'+ renderNum"/>
      </div>

    </div>
    <div class="relative z-20 w-full mb-20 h-9 bg-primary-0 dark:bg-secondary-200"></div>
    <div class="absolute z-10 bottom-0  right-0 w-full h-20 flex bg-primary-0 dark:bg-secondary-200 items-center justify-end"
         style="box-shadow: 0px -1px 20px rgba(0, 0, 0, 0.2);"></div>
    <button
      class="absolute z-30 bottom-0 right-0 text-blue-1 text-body-2 font-medium tracking-80 w-28 h-20 flex justify-center items-center mr-8">
      {{ $t('MemberList-filter-button-1') }}
    </button>
  </div>
</template>

<script>
import CheckboxFilter from "./filterList/checkboxFilter";
import {mapGetters} from "vuex";


export default {
  name: "filterList",
  components: {
    CheckboxFilter,
  },
  props: ["clickX", "clickY"],
  data() {
    return {
      open: false,
      scale: false,
      date: new Date(),
      searchWord: '',
      renderNum: 0,
      genders: ["Female", "Male"],
      countries: ["Thailand", "Taiwan", "USA", "China"],
      pickerOptions: {
        disabledDate: (time) => {
          return time.getTime() > new Date();
        }
      },
      optionCounts: '',
      levels: [],
      countryMap: '',
      tags: {
        fan: '',
        ec: '',
        dc: ''
      },
      openMoreFilter: false,
    }
  },
  computed: {
    ...mapGetters({theme: "getTheme"}),
  },
  mounted() {
  },
}
</script>

<style scoped lang="scss">

.middle-overlay {
  position: fixed;
  width: 100%;
  height: auto;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

.close-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50;
  transform: translate(-50%, -50%) scale(15);
  animation-name: closeOverlay;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes scaleFull {
  from {
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    transform: translate(-50%, -50%) scale(15);
  }
}

@keyframes closeOverlay {
  from {
    transform: translate(-50%, -50%) scale(15);
  }
  to {
    transform: translate(-50%, -50%) scale(0.1);
  }
}

.custom-hover-effect {
  transition: all .5s linear;
  border-radius: 100%;
}

.custom-hover-effect:hover {
  transition: all .5s linear;
  border-radius: 1rem;
  cursor: pointer;
}

.modal-container {
  position: absolute;
  opacity: 0;
  left: 50%;
  top: 50%;
  z-index: 50;
  width: 75vw;
  height: 75vh;
  min-width: 968px;
  min-height: 500px;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  @include for-desktop {
    width: 85vw;
  }
}

.modal-header {
  width: 100%;
  box-shadow: 1px 15px 26px -22px rgba(0, 0, 0, 0.1);
}

.modal-content {
  min-height: 500px;
  height: calc(80vh - 0rem);
}

.custom-date-input:deep .el-input__inner {
  border-width: 2px;
  border-radius: 0;
  border-color: #999999;
  padding: 3px 1rem 2px;
  width: 10rem;
  height: initial;
}

.custom-date-input:deep .el-input__prefix {
  display: none;
}

.custom-date-input:deep .el-input__suffix {
  display: none;
}

.custom-date-input:deep ::placeholder {
  color: #212121;
  font-size: 1rem;
}

.custom-date-input:deep input {
  color: #212121;
  font-size: 1rem;
}

//.custom-date-input:deep .el-icon-date {
//  display: none;
//}
//
//.custom-date-input:deep .el-date-input {
//  cursor: pointer;
//  text-align: left;
//  font-size: 1rem;
//  font-weight: 400;
//  letter-spacing: 0.03em;
//  color: #374151;
//  width: 100%;
//}
//
//.custom-date-input:deep .el-range-separator {
//  padding: 0.125rem 0 0 0;
//  margin: 0 1.5rem 0 1rem;
//}
//


@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, -20%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.el-button--default {
  border: none;
  background: none;
  font-size: 1rem;
  padding: 0;
}
</style>
<style lang="scss">

.el-date-table td.current span {
  background-color: #1a1a1a;
}

.el-date-table td.current:not(.disabled) span {
  background-color: #1a1a1a;
}

.el-date-table td.end-date span {
  background-color: #1a1a1a;
}

.el-date-table td.today span {
  font-weight: bold;
  color: #1a1a1a;
}

.el-date-table td.available:hover {
  font-weight: bold;
  color: black;
}

.el-range__close-icon {
  display: none !important;
}

.dark {
  input::placeholder {
    background-color: transparent !important;
    color: #FFFFFF;
    opacity: 1;
  }

  .search-input {
    background: transparent;
    color: #FFFFFF;
  }
}

.dark {
  .el-range-input {
    background-color: #212932;
    color: #FFFFFF !important;

    &::placeholder {
      background-color: transparent;
      color: #FFFFFF;
    }
  }
  .el-range-editor {
    border-bottom: solid 2px rgba(255, 255, 255, 0.5) !important;
  }

  .el-date-editor {
    //background-color: #212932;
    color: #FFFFFF;
  }
  .el-input__inner {
    color: white !important;
  }
  .el-range-separator {
    color: #FFFFFF;
  }
}
</style>
