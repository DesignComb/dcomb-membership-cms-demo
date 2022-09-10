<template>
  <el-table-column
    prop=""
    :label="$t('MemberList-table-3')"
    min-width="150%">
    <template slot-scope="scope">
      <div
        class="text-base tracking-30 pr-4 overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-primary-0">
        {{ scope.row.FirstName }} {{ scope.row.LastName }}
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "nameColumn"
}
</script>

<style scoped>

</style>
