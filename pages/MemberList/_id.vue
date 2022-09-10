<template>
  <div class="mt-6 pb-24">
    <div class="w-full flex flex-wrap bg-white dark:bg-secondary-200 border border-gray-300 dark:border-memberTable-4  rounded-xl px-8 pb-8 divide-y divide-gray-300 dark:divide-memberTable-2">
      <div class="w-full flex px-6 py-6">
        <div class="w-1/3 flex items-center">
          <img class="rounded-full border dark:border-transparent overflow-hidden w-14 h-14 mt-2"
               :src="memberDetail.Avatar || defaultAvatar" @error="defaultAvatar">
          <div class="pl-12 text-left">
            <div class="leading-loose text-gray-400 text-base font-normal">{{ $t('MemberList-table-1')}}</div>
            <div class="text-base font-normal">{{ memberDetail.NickName }}</div>
            <div class="text-caption font-light tracking-tight">{{ memberDetail.ID }}</div>
          </div>
        </div>
      </div>
      <div class="w-full flex text-left px-6 py-6">
        <div class="w-1/6">
          <div class="leading-loose text-gray-400 text-base font-normal mb-4">{{ $t('MemberList-table-2')}}</div>
          <div class="text-base font-normal break-words">{{ memberDetail.Email }}</div>
        </div>
        <div class="w-1/6">
          <div class="leading-loose text-gray-400 text-base font-normal mb-4">{{ $t('MemberList-table-7')}}</div>
          <div class="text-base font-normal">{{ memberDetail.BirthDay }}</div>
        </div>
        <div class="w-1/6">
          <div class="leading-loose text-gray-400 mb-4">{{ $t('MemberList-table-8')}}</div>
          <div class="">{{ $t(`${memberDetail.Country}`) }}</div>
        </div>
        <div class="w-1/6">
          <div class="leading-loose text-gray-400 text-base font-normal mb-4">{{ $t('MemberList-table-4')}}</div>
          <div class="text-base font-normal">{{ $t(`${memberDetail.Gender}`) }}</div>
        </div>
      </div>
      <div class="w-full flex text-left text-base font-normal px-6 py-6">
        <div class="w-1/6">
          <div class="leading-loose text-gray-400 mb-4">{{ $t('MemberList-table-3')}}</div>
          <div class="">{{ memberDetail.LastName }} {{ memberDetail.FirstName }}</div>
        </div>
        <div class="w-1/6">
          <div class="leading-loose text-gray-400 mb-4">{{ $t('MemberList-table-5')}}</div>
          <div class="">{{ memberDetail.Address }}</div>
        </div>
        <div class="w-1/6">
          <div class="leading-loose text-gray-400 mb-4">{{ $t('MemberList-table-6')}}</div>
          <div class="">{{ memberDetail.Phone }}</div>
        </div>
      </div>
      <div class="w-full flex text-left text-base font-normal px-6 py-6">
        <div class="w-1/6">
          <div class="leading-loose text-gray-400 mb-4">{{ $t('MemberList-table-9')}}</div>
          <div class="">{{ memberDetail.EcommerceAmount }}</div>
        </div>
        <div class="w-2/6">
          <div class="leading-loose text-gray-400 mb-4">{{ $t('MemberList-table-10')}}</div>
          <div class="">{{ memberDetail.EcommerceAmountOfThisMonth }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import defaultImg from "../../mixins/defaultImg";

export default {
  name: "MemberList_id.vue",
  async asyncData({store,params}) {
    await store.dispatch('memberList/getMemberList')
    await store.dispatch('memberList/getMember', params.id)
  },
  mixins: [defaultImg],
  data(){
    return{
      date2month: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    }
  },
  computed: {
    ...mapState('memberList', {
      memberDetail: state => state.member,
}),
  },

}
</script>
