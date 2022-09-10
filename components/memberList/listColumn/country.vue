<template>
  <el-table-column
    :label="$t('MemberList-table-8')"
    min-width="150%">
    <template slot-scope="scope">
      <div class="text-base tracking-30 dark:text-primary-0">
        {{ $t(`${scope.row.Country}`) }}
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "countryColumn"
}
</script>

<style scoped>

</style>
