<template>
  <div class="button-container">
    <el-button type="primary" icon="el-icon-back" @click="backTo">返回上一级</el-button>
  </div>
</template>
<style lang="scss" scoped>
.button-container{
    position: fixed;
    bottom: 20px;
    left: 69px;
}
</style>

<script>
export default {
  methods: {
      backTo() {
          this.$router.back()
      }
  }
}
</script>
