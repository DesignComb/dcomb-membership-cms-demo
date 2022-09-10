<template>
  <div>
    <div class="relative overflow-auto flex flex-wrap text-left w-full p-5 mt-5">
      <draggable class="flex flex-wrap w-full"
                 v-model="tmpList" group="example" @end="reOrder" animation="300" filter=".ignore"
                 forceFallback="true">
        <div v-for="(item,index) in tmpList" :key="item.id"
             class="flex w-full justify-between border-b py-3">
          <div class="flex">
           <span class="flex items-center drag-cursor" draggable="true">
            <svg-icon class="h-5 w-5 mr-4 pb-0.5" name="drag_dot"/>
          </span>
            {{ $t(item.label) }}
          </div>
        </div>
      </draggable>
    </div>
  </div>

</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "itemDisplay",
  components: {
    draggable
  },
  computed: {
    tmpList: {
      get() {
        return this.$store.state.memberList.columnSorted
      },
      set(value) {
        this.$store.commit('memberList/SET_LIST_COLUMN', value)
      }
    }
  },
  methods: {
    reOrder() {
      this.$store.commit("memberList/SET_LIST_COLUMN", this.tmpList)
    },
  }
}
</script>

<style scoped>

</style>
