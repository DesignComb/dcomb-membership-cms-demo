<template>
  <div class="flex items-center px-5 mt-10">
  <button @click="downloadMembers"
    class="text-blue-1">
    {{ $t('MemberList-download-button') }}
  </button>
    {{ $t('MemberList-download-description') }}
  </div>
</template>

<script>
import createCsvFile from "../../../../mixins/createCsvFile";

export default {
  name: "download",
  props: ['selectMembers'],
  mixins: [createCsvFile],
  methods: {
    async downloadMembers() {
      const tmp = this.$store.state.memberList.members
      const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
      const header = Object.keys(tmp[0])
      const csv = [
        header.join(','), // header row first
        ...tmp.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
      ].join('\r\n')
      await this.createCsvFile(csv)
    }
  },
}
</script>
