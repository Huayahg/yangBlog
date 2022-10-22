<script setup></script>
<template>
  <!-- 这里是父元素div -->
  <div class="father_div">
    <!-- 这是是header元素div -->
    <div class="header_div">
      <!-- 这里是导航栏div -->
      <div class="navigation_div">
        <!-- TODO 导航栏主要内容：导航条列表、logo、用户头像和状态  -->
      </div>
    </div>
    <!-- 这里是中间元素div -->
    <div class="container_div"></div>
    <!-- 这里是底部元素div -->
    <div class="footer_div"></div>
  </div>
</template>

<style lang="scss">
.father_div {
  width: 100%;
  height: 100vh;
  background-color: aqua;
  .header_div {
    width: auto;
    height: 80px;
    background-color: blue;
  }
}
</style>
