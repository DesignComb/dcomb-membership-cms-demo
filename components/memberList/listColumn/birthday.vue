<template>
  <el-table-column
    prop="birthday"
    :label="$t('MemberList-table-7')"
    min-width="170%">
    <template slot-scope="scope">
      <div
        class="text-base tracking-30 pr-4 overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-primary-0">
        {{ scope.row.BirthDay }}
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "birthdayColumn"
}
</script>

<style scoped>

</style>
