<template>
  <div class="w-full flex flex-col">
    <right-modal>
      <template #title>
        <selector v-show="$store.state.toggle.rightModalContent < 5"/>
      </template>
      <template #content>
        <filter-list v-show="$store.state.toggle.rightModalContent === 0"/>
        <item-display v-show="$store.state.toggle.rightModalContent === 1"/>
        <download v-show="$store.state.toggle.rightModalContent === 2"/>
      </template>
    </right-modal>
    <div class="toolbar my-3 flex flex-wrap font-light">
      <div class="flex">
        <div class="flex items-center">
          <button @click="handleFilter()"
                  class="inline-flex items-center justify-between pr-8 py-1.5 ">
            <span class="flex text-base font-medium pt-0.5">{{ $t('MemberList-rightModal-Page-1') }}</span>
          </button>
          <button @click="$store.commit('toggle/SET_AND_OPEN_RIGHT_MODAL',1)"
                  class="inline-flex items-center justify-between pr-8 py-1.5 ">
            <span class="flex text-base font-medium  pt-0.5">{{ $t('MemberList-rightModal-Page-2') }}</span>
          </button>
          <button @click="handleDownload()"
                  class="inline-flex items-center justify-between pr-8 py-1.5 ">
            <span class="flex text-base font-medium pt-0.5">{{ $t('MemberList-rightModal-Page-3') }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="relative flex dark:bg-secondary-100">
      <el-table
        ref="table"
        id="member-table"
        class="custom-table rounded-lg border"
        style="width: 100%; color: black; font-size: 1rem; line-height: 1.5rem;position: relative;z-index: 10"
        :max-height="tableHeight"
        :data="$store.state.memberList.members"
        :row-key="getRowKeys"
        :key="'member-table'+screenWidth + screenHeight "

        v-loading="$store.state.memberList.loadingStatus"
        element-loading-background="rgba(0, 0, 0, 0.4)"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"

        :row-class-name="tableRowClassName"
        :cell-class-name="tableRowClassName"
        :header-cell-style="tableHeaderStyle">
        <el-table-column
          type="selection"
          disabled='true'
          :reserve-selection="true"
          min-width="20%"
          align="center"
          :fixed="screenWidth >= 1023">
        </el-table-column>
        <el-table-column
          class="text-base font-normal"
          :cell-class-name="tableHeader"
          :label="$t('MemberList-table-1')"
          min-width="320%"
          :fixed="screenWidth >= 1023">
          <template slot="header">
            <div class="w-full relative">
              <div style="padding-left: calc(320px / 3)">
                {{ $t('MemberList-table-1') }}
              </div>
            </div>
          </template>
          <template slot-scope="scope">
            <div
              class="channel-name-enter pt-2.5 pb-2 2xl:pt-3 2xl:pb-3 border-r-2 border-gray-200 dark:border-secondary-600 dark:text-primary-0">
              <nuxt-link class="flex w-full" :to="localePath('/MemberList/'+scope.row.ID)">
                <div class="w-1/3 justify-center items-center">
                  <img class="rounded-full border overflow-hidden w-10 h-10 mt-0.5 mx-auto dark:border-transparent"
                       :src="scope.row.Avatar || defaultAvatar" @error="defaultAvatar"
                       alt=""/>
                </div>
                <div class="w-2/3">
                  <div class="inline whitespace-nowrap overflow-ellipsis overflow-hidden text-base font-normal pr-6">{{
                      scope.row.NickName || 'Unknown'
                    }}
                  </div>
                  <div class="text-caption font-light tracking-tight">{{ scope.row.ID }}</div>
                </div>
              </nuxt-link>
              <span class="enter-tag">
              <span class="text-headline-2">
                <i class="bx bx-chevron-right text-black dark:text-primary-0"/>
              </span>
            </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column min-width="30%"></el-table-column>
        <component v-for="(item,index) in $store.state.memberList.columnSorted" :key="index" :is="item.id"/>

        <el-table-column
          prop=""
          label=""
          width="3"
          fixed="right">
        </el-table-column>
      </el-table>
    </div>
    <div
      class="member-footer flex items-center justify-center w-full h-12 fixed left-0 bottom-0 z-50 bg-primary-100 dark:bg-secondary-100">
      <el-pagination
        background
        layout="prev, next"
        :current-page="$store.state.memberList.page.current"
        :page-size="1"
        :total="$store.state.memberList.page.total"
        @current-change="handlePageChange"
      >
      </el-pagination>
      <span class="absolute font-normal text-base tracking-30">page {{
          $store.state.memberList.page.current
        }} of {{ $store.state.memberList.page.total }}</span>
    </div>
  </div>
</template>

<script>
import ElementLoading from "../../components/layout/loading/elementLoading";
import {mapGetters} from "vuex";
import RightModal from "../../components/common/rightModal";
import Selector from "../../components/memberList/modal/rightModal/selector";
import Download from "../../components/memberList/modal/rightModal/download";
import ItemDisplay from "../../components/memberList/modal/rightModal/itemDisplay";
import EmailColumn from "../../components/memberList/listColumn/email";
import AddressColumn from "../../components/memberList/listColumn/address";
import BirthdayColumn from "../../components/memberList/listColumn/birthday";
import CountryColumn from "../../components/memberList/listColumn/country";
import GenderColumn from "../../components/memberList/listColumn/gender";
import NameColumn from "../../components/memberList/listColumn/name";
import PhoneColumn from "../../components/memberList/listColumn/phone";
import FilterList from "../../components/memberList/modal/rightModal/filterList";
import defaultImg from "../../mixins/defaultImg";
import EcPeriodColumn from "../../components/memberList/listColumn/ecPeriod";
import EcTotalColumn from "../../components/memberList/listColumn/ecTotal";

export default {
  name: "MemberList_new",
  components: {
    EcTotalColumn, EcPeriodColumn,
    FilterList, PhoneColumn, NameColumn,
    GenderColumn, CountryColumn, BirthdayColumn,
    AddressColumn, EmailColumn, ItemDisplay,
    Download, Selector, RightModal,
    ElementLoading
  },
  mixins: [defaultImg],
  data() {
    return {
      screenHeight: 0,
      screenWidth: 0,
      tableTop: 0,
      tableHeight: 999,

      isLoading: false,
      searchWord: '',
      multipleSelection: [],
      isDesc: true,
      sortProp: 'joinTime',
      tmp: {
        memo: '',
      },
      n: 0,
      isAll: false,
      checkLoading: false,
      addTagParam: {
        memberIds: [],
        tagId: 0,
      },
      fanIndex: 0,
      addTagFan: '',
    }
  },
  async mounted() {
    let _this = this
    window.onresize = function () { // 定義視窗大小變更通知事件
      _this.screenWidth = document.documentElement.clientWidth // 視窗寬度
      _this.screenHeight = document.documentElement.clientHeight // 視窗高度
    }
    await this.$store.dispatch('memberList/getMemberList')

    this.$nextTick(function () {
      this.handleTableMaxHeight()
    })
  },
  computed: {
    MemberIds() {
      return this.multipleSelection.map(item => item.ID);
    },
    ...mapGetters({theme: "getTheme"}),
  },
  watch: {
    'screenHeight': function (val) { // 監聽螢幕高度變化
      this.handleTableMaxHeight()
    },
    'screenWidth': function (val) { // 監聽螢幕高度變化
      this.handleTableMaxHeight()
    },
    '$store.state.searchWord': function () {
      // this.getMemberList()
    },
  },
  methods: {
    getRowKeys(row) {
      return row.ID;
    },
    handleTableMaxHeight() {
      const tableTop = document.getElementById('member-table').getBoundingClientRect().top
      const windowHeight = document.body.offsetHeight
      this.tableHeight = windowHeight - tableTop - 3 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    },
    handleFilter() {
      this.$store.state.toggle.rightModalContent === 0
        ? this.$store.commit('toggle/SET_OPEN_RIGHT_MODAL')
        : this.$store.commit("toggle/SET_AND_OPEN_RIGHT_MODAL", 0)
    },
    handleDownload() {
      this.$store.state.toggle.rightModalContent === 2
        ? this.$store.commit('toggle/SET_OPEN_RIGHT_MODAL')
        : this.$store.commit("toggle/SET_AND_OPEN_RIGHT_MODAL", 2)
    },
    handleRightModal() {
      this.$store.commit("SET_OPEN_RIGHT_MODAL")
    },
    handlePageChange(val) {
      this.$store.commit('memberList/SET_MEMBER_PAGE', {current: val})
      this.$store.dispatch('memberList/getMemberList')
      this.$nextTick(() => {
        this.$refs["table"].bodyWrapper.scrollTop = 0;
      })
    },
    tableHeader: function (row, column, rowIndex, columnIndex) {
      return 'test'
    },
    tableRowClassName({row, rowIndex}) {
      if (this.theme === 'dark') {
        return 'dark-table'
      } else {
        return 'light-table'
      }
    },
    tableHeaderStyle({row, column, rowIndex, columnIndex}) {
      if (this.theme === 'dark') {
        return 'background-color: #353F4B; font-size:1rem; border-color: #4D5661;';
      }
    },
  }
}
</script>
<style scoped lang="scss">
body {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.tag-name {
  transition: all .3s ease-in-out;
}

.hover-close-tag:hover .tag-name {
  padding-right: 1.25rem;
}

.close-tag {
  position: absolute;
  right: 1rem;
  opacity: 0;
  transition: all .3s ease-in-out;
}

.hover-close-tag:hover .close-tag {
  opacity: 1;
  right: 0.25rem;
  transition: all .5s ease-in-out;
}

.enter-tag {
  position: absolute;
  top: 65%;
  right: 2rem;
  opacity: 0;
  transform: scale(0.85, 1.3) translateY(-50%);
  transition: all .3s ease-in-out;
}

.channel-name-enter:hover .enter-tag {
  opacity: 1;
  right: 1rem;
  transition: all .5s ease-in-out;
}

.dark {
  .channel-name-enter:hover {
    background-color: #2E363F;
  }
}

.x-tag {
  position: relative;
  transform: scaleY(0.8);
}

.member-footer:deep .btn-prev, .member-footer:deep .btn-next {
  background-color: white;
  border: solid 1px rgba(0, 0, 0, 0.1);
  margin: 0 100px;
  transform: scale(1.2);
}

.member-footer:deep .btn-prev:hover, .member-footer:deep .btn-next:hover {
  background-color: #F6F7F8;
}

.prize-color:deep .el-checkbox__inner {
  border: solid 1px #AF6AB3;
}

.prize-color:deep .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #AF6AB3;
}

.prize-color:deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #AF6AB3;
}

.prize-color:deep .el-input__inner {
  height: 2rem;
  border-color: #AF6AB3;
}

.memo-color:deep .el-input__inner {
  height: initial;
  border-color: #DCDFE6;
}

.disableSelect:deep .el-checkbox__inner {
  background-color: #edf2fc;
  border-color: #DCDFE6;
  cursor: not-allowed;
  pointer-events: none;
}

.disableSelect:deep .el-checkbox {
  cursor: not-allowed;
  pointer-events: none;
}

.disableSelect:deep .el-checkbox__input {
  cursor: not-allowed;
  pointer-events: none;
}

.selected-text {
  position: absolute;
  display: inline-flex;
  width: 22rem;
  z-index: 100;
  background-color: white;
  margin-top: 0.75rem;
  margin-left: 3.25rem
}

.custom-table:deep .el-icon-loading {
  color: white;
}

.custom-table:deep .el-loading-text {
  color: white;
}

.custom-table:deep th {
  font-weight: 400;
  letter-spacing: 0.03em;
}

.custom-table:deep .el-table_1_column_3 {
  letter-spacing: 0;
}

.custom-table:deep .el-table_1_column_4 {
  letter-spacing: 0;
}

.custom-table:deep .cell {
  padding: 0;
}

.custom-table:deep td, .custom-table:deep th {
  line-height: 0;
  padding: 0;
}

.custom-table:deep tr:hover > td {
  background: transparent;
}

.custom-table:deep th:nth-child(2) {
  //padding-left: calc(320px / 3);
  border-right-width: 2px;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.el-button--default {
  border: none;
  background: none;
  font-size: 1rem;
}

.not-last:last-child {
  display: none;
}
</style>

<style lang="scss">
.test {
  font-weight: 400;
}

@media screen and (min-width: 1280px) {
  .lds-ellipsis div {
    top: 0 !important;
  }
}

.el-popover {
  font-size: 1rem;
  text-align: center;
  padding: 10px 15px;
  white-space: nowrap;
}

.hover-row > td {
  background-color: initial !important;
}

.el-table .dark-table {
  background-color: #353F4B;
  border-color: #4D5661;
}

.dark {
  .el-table__body tr:hover > td {
    background-color: rgba(53, 63, 75, 0.8)
  }

  .el-table::before {
    background-color: transparent;
  }

  .el-table--border::after {
    background-color: transparent;
  }
}

.el-table .light-table {
  background-color: #FFFFFF;
}
</style>
