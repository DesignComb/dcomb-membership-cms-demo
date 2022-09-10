<template>
  <div class="relative">
    <div>
      <div class="grid grid-cols-3">
        <label class="w-full flex justify-between items-start py-2.5 menu-hover font-normal cursor-pointer"
               :for="'all'+type">
          <input class="hidden is-checked" type="checkbox" :id="'all'+type" v-model="isSelectAll" :value="'all'+type">
          <span class="flex items-center checked-color">
              <span class="flex items-center justify-center h-5 w-5 text-3xl text-gray-21 cursor-pointer">
                <i class="non-select bx bx-checkbox" style="color: #999999;"></i>
                <i class="selected bx text-2xl bxs-check-square"></i>
              </span>
              <span class="text-base font-base tracking-30 pl-2 pt-0.5">{{ $t('MemberList-filter-All') }}</span>
            </span>
        </label>
        <label
          v-for="(option, index) in options"
          :key="index"
          class="w-full flex justify-between items-center py-2.5 menu-hover font-normal cursor-pointer"
          :for="option">
          <input
            class="hidden is-checked"
            type="checkbox"
            name="checkbox"
            :id="option"
            :value="option"
            v-model="optionSelected">
          <span class="flex items-center checked-color">
            <span class="flex items-center justify-center h-5 w-5 text-3xl text-gray-21 cursor-pointer">
              <i class="non-select bx bx-checkbox" style="color: #999999;"></i>
              <i class="selected bx text-2xl bxs-check-square"></i>
            </span>
            <span class="text-base font-base tracking-30 pl-2 pt-0.5">{{ $t(`${option}`) }}</span>
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: "checkboxFilter",
  props:["type","options"],
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      openMenu: false,
      optionSelected: [],
      optionCounts:''
    }
  },
  computed: {
    // 綁定在全選的 checkbox 的名稱
    // 1. 頁面讀取時會觸發 get 取回被綁定的物件應屬於什麼值（這邊就是看你要預設全選還是不全選）
    // 2. 當勾選時會變動值，觸發 computed 執行重算
    isSelectAll: {
      get: function () {
        // 當「已經打勾的選項」跟「可以打勾的選項」一樣多，把全選的值修正成 true or false
        // 下面這個判斷是說，當「可以用來打勾的選項」this.checkboxes 是存在的話
        // ？ 回傳（「已經打勾的選項」this.selected.length 跟「可以打勾的選項」this.checkboxes.length 一樣多嗎）
        // ： 否則回傳 false （不存在可以打勾的選項）
        if(this.optionSelected.length === this.options.length && this.optionSelected.includes("all" + this.type)){
          this.optionSelected = this.optionSelected.filter(item=>item!==("all" + this.type))
          return false
        }
        else{
          return this.optionSelected.length >= this.options.length
        }
      },
      // 當 v-model 觸發 狀態改變，執行 set
      set: function (value) {

        // value 是 v-model 在全選 checkbox 上的勾選狀態，打勾時為 true

        // 暫存用陣列，用來存放被打勾的 checkbox value
        let selected = []

        // 如果全選打勾
        if (value) {
          // 把可以勾的 checkbox dom 跑一輪
          this.options.forEach((action) => {
            // 寫入暫存陣列
            selected.push(action)
          })
          selected.push('all'+ this.type)
        }

        // 將暫存陣列的值寫到已經勾選的容器陣列，表示全都勾（true），false 時會被清空
        this.optionSelected = selected
      }
    }
  },
}
</script>

<style lang="scss" scoped>
:focus {
  outline: none;
}

.multiple-menu-hover:hover .hover-bg {
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}
.dark{
  .multiple-menu-hover:hover .hover-bg {
    background-color: #212932;
    cursor: pointer;
  }
}
label {
  vertical-align: middle;
}

input[type="checkbox"] {
  cursor: pointer;
}

input[type="checkbox"]:hover {
  cursor: pointer;
  opacity: 0.7;
}
.selected{
  display: none;
}
.is-checked:checked + .checked-color{
  .non-select{
    display: none;
  }
  .selected{
    display: block;
    //color: #AF6AB3;
  }
}
.multiselect-move {
  transition: all;
}

.transition-opacity-transform {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.tag-name {
  padding-right: 1.25rem;
  transition: all .5s ease-in-out;
}


.close-tag {
  position: absolute;
  right: 0.25rem;
  opacity: 1;
  transition: all .5s ease-in-out;
}

.x-tag {
  position: relative;
  transform: scaleY(0.8);
}

.dark{
  .menu-hover:hover{
    background-color:rgb(82, 84, 87,0.7)
  }
}
</style>
