<template>
  <el-table-column
    prop="Gender"
    min-width="120%"
    :label="$t('MemberList-table-4')"
  >
    <template slot-scope="scope">
      <div class="text-base tracking-30 dark:text-primary-0">
        {{ $t(`${scope.row.Gender}`) }}
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "genderColumn"
}
</script>

<style scoped>

</style>
