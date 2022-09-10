<template>
  <div v-if="loading" class="loading-page">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"pageLoading",
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
      const mo = function (e) {
        e.preventDefault()
      }
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', mo, false)// 禁止頁面滑動
    },
    finish() {
        this.loading = false
        const mo = function (e) {
          e.preventDefault()
        }
        document.body.style.overflow = ''// 出現滾動條
        document.removeEventListener('touchmove', mo, false)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  z-index: 99999999999;
}
.lds-ellipsis {
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  top:50%;
  transform: translateY(-50%);
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #AF6AB3;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
