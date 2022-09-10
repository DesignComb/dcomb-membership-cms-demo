<template>
  <el-table-column
    prop="EcommerceAmount"
    :label="$t('MemberList-table-9')"
    min-width="250%">
    <template slot-scope="scope">
      <div class="text-base pr-4 overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-primary-0">
        {{ scope.row.EcommerceAmount }}
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "ecTotalColumn"
}
</script>

<style scoped>

</style>
