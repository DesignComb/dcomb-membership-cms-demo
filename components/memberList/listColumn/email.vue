<template>
  <el-table-column
    prop="Email"
    :label="$t('MemberList-table-2')"
    min-width="250%">
    <template slot-scope="scope">
      <div class="text-base pr-4 overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-primary-0">
        {{ scope.row.Email }}
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "emailColumn"
}
</script>

<style scoped>

</style>
