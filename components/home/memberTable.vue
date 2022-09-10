<template>
  <div class="h-96 mt-6 rounded-md overflow-hidden shadow-normal">
    <div
      class="flex justify-between items-end text-blue-100 dark:text-memberTable-1 bg-gray-8 dark:bg-secondary-600 divide-x dark:divide-memberTable-0 ">
      <div class="w-1/2 relative flex">
        <div
          @click="handleMemberStatus"
          class="w-1/2 flex text-base text-black opacity-80 dark:text-white justify-center py-3 font-medium cursor-pointer border-t-4 border-transparent"
          :class="showNew ? 'bg-white dark:bg-secondary-200 border-blue-1 dark:border-blue-2 text-blue-1 dark:text-blue-2' : ''">
          {{ $t("home-table-button-1") }}
        </div>
        <div
          @click="handleMemberStatus"
          class="w-1/2 flex text-base text-black opacity-80 dark:text-white justify-center py-3 font-medium cursor-pointer border-t-4 border-transparent"
          :class="showNew ? '' : 'bg-white dark:bg-secondary-200 border-blue-1 dark:border-blue-2 text-blue-1 dark:text-blue-2'">
          {{ $t("home-table-button-2") }}
        </div>
      </div>
      <div class="w-1/2 flex justify-end">
        <span @click="showNew ? $store.commit('SET_SHOW_CANCEL',false) : $store.commit('SET_SHOW_CANCEL',true)">
        <nuxt-link :to="localePath('/MemberList')"
                   class="flex text-body-2 text-blue-1 justify-end px-6 py-3 hover:opacity-70 cursor-pointer dark:text-blue-2">
          {{ $t("home-table-button-3") }}
        </nuxt-link>
        </span>
      </div>
    </div>
    <el-table
      ref="table"
      id="home-member-table"
      :data="showNew ? memberData.slice(0, 4) : leaveMemberData.slice(0, 4)"
      v-loading="isLoading"
      height="100%"
      element-loading-background="rgba(0, 0, 0, 0.4)"
      element-loading-text="Loading..."
      element-loading-spinner="el-icon-loading"
      class="custom-table font-medium text-body-2 dark:bg-secondary-200"
      style="width: 100%; height: 100%; color: black; line-height: 1.5rem;position: relative;z-index: 10"
      :cell-class-name="tableRowClassName"
      :header-cell-style='tableHeaderStyle'
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        prop="name"
        :label='$t("MemberList-table-1")'
        min-width="250%">
        <template slot-scope="scope" slot="header">
          <div class="flex w-full border-r-3 pt-6 2xl:pt-5 pb-2 text-black font-normal dark:border-memberTable-2">
            <span class="w-1/3"></span>
            <span class="w-2/3 opacity-60 dark:text-primary-0">{{ $t("MemberList-table-1") }}</span>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="channel-name-enter pt-2.5 pb-2 2xl:pt-3 2xl:pb-3 border-r-3 dark:border-memberTable-2">
            <nuxt-link class="flex w-full" :to="localePath('/MemberList/'+scope.row.ID)">
              <div class="w-1/3 justify-center items-center">
                <img :class="showNew ? '': 'opacity-75'"
                     class="rounded-full border overflow-hidden w-10 h-10 mt-0.5 mx-auto dark:border-transparent"
                     :src="scope.row.Avatar"
                     alt=""/>
              </div>
              <div class="w-2/3 dark:text-primary-0">
                <div :class="showNew ? '': 'opacity-75'"
                     class="inline whitespace-nowrap overflow-ellipsis overflow-hidden text-base font-normal pr-6">
                  {{ scope.row.NickName }}
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
      <el-table-column
        prop="Level.Name"
        :label='$t("MemberList-table-3")'
        min-width="180%"
        class="overflow-ellipsis overflow-hidden whitespace-nowrap">
        <template slot-scope="scope" slot="header">
          <div class="pl-8 pt-6 2xl:pt-5 pb-2 text-black opacity-60 font-normal dark:text-primary-0">
            {{ $t("MemberList-table-3") }}
          </div>
        </template>
        <template slot-scope="scope">
          <div
            class="pl-8 text-base font-normal overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-primary-0">
            {{ scope.row.FirstName }} {{ scope.row.LastName }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop=""
        :label='$t("MemberList-table-7")'
        min-width="180%">
        <template slot-scope="scope" slot="header">
          <div class="pt-6 2xl:pt-5 pb-2 text-black opacity-60 font-normal dark:text-primary-0">
            {{ $t("MemberList-table-7") }}
          </div>
        </template>
        <template slot-scope="scope">
          <div class="dark:text-primary-0">
            <div class="text-base font-normal ">
              {{ scope.row.BirthDay }}
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "memberTable",
  props: ["memberData", "leaveMemberData", "isLoading"],
  data() {
    return {
      showNew: true,
    }
  },
  methods: {
    handleMemberStatus() {
      this.showNew = !this.showNew;
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
    }
  },
  computed: {
    ...mapGetters({theme: "getTheme"}),
  },
}
</script>

<style lang="scss" scoped>
#home-member-table:deep td, #home-member-table:deep th {
  line-height: 0;
  padding: 0;
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
  right: 1.5rem;
  transition: all .5s ease-in-out;
}

.custom-table:deep .el-loading-text {
  color: white;
}

.custom-table:deep .cell {
  padding: 0;
}

.custom-table:deep tr:hover > td {
  background: transparent;
}

.dark {
  .channel-name-enter:hover {
    background-color: #2E363F;
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
.dark {
  .custom-table {
    background-color: #353F4B;
  }

  .el-table__header-wrapper {
    background-color: #353F4B;
  }
}

.el-table .dark-table {
  background-color: #353F4B;
  border-color: #4D5661;
}

.el-table .light-table {
  background-color: #FFFFFF;
}
</style>
