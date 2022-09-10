<template>
  <el-table-column
    prop="Address"
    :label="$t('MemberList-table-5')"
    min-width="250%">
    <template slot-scope="scope">
      <div
        class="text-base tracking-30 pr-4 overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-primary-0">
        {{ scope.row.Address }}
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "addressColumn"
}
</script>

<style scoped>

</style>
