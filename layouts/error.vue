<template>
  <div class="error-page-container">
    <div>
      <div class="title">Error...Redirect after {{time}}s</div>
      <div class="description">
        If not,
        <nuxt-link to="/" class="border-b border-black">Click to Home Page >></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
  data() {
    return {
      time: 0,
    }
  },
  methods: {
    countDown() {
      let THIS = this;
      THIS.time--;
    }

  },
  mounted() {
    let THIS = this;
    THIS.time = 5;
    setInterval(THIS.countDown, 1000);
  },
  watch: {
    "time": function (newVal) {
      if (newVal === 0) {
        this.$router.push('/');
      }
    }
  }
}

</script>

<style>
.error-page-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.2rem;
}

</style>
