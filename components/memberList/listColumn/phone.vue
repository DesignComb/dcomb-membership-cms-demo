<template>
  <el-table-column
    prop="Phone"
    :label="$t('MemberList-table-6')"
    min-width="150%">
    <template slot-scope="scope">
      <div class="text-base tracking-30 dark:text-primary-0">
        {{ scope.row.Phone }}
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "phoneColumn"
}
</script>

<style scoped>

</style>
