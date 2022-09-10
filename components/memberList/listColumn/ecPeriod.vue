<template>
  <el-table-column
    prop="EcommerceAmountOfThisMonth"
    :label="$t('MemberList-table-10')"
    min-width="250%">
    <template slot-scope="scope">
      <div class="text-base pr-4 overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-primary-0">
        {{ scope.row.EcommerceAmountOfThisMonth }}
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "ecPeriodColumn"
}
</script>

<style scoped>

</style>
