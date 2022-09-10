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
    }
  },
}
</script>
