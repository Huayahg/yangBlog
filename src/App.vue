<script setup></script>
<template>
  <!-- 这里是父元素div -->
  <div class="father_div">
    <!-- 这是是header元素div -->
    <div class="header_div">
      <!-- 这里是导航栏div -->
      <div class="navigation_div">
        <!-- logo div -->
        <div class="logo_div">
          <span>
            <img src="./assets/img/logo.png" />
          </span>
        </div>
        <!-- 导航栏 -->
        <!-- TODO 导航栏链接及相关页面 -->
        <div class="navigation_bar">
          <ul>
            <li>首页</li>
            <li>资源</li>
            <li>学习</li>
            <li>消息</li>
            <li>热搜</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 这里是中间元素div -->
    <!-- TODO 中间元素定位 -->
    <div class="container_div"></div>
    <!-- 这里是底部元素div -->
    <!-- TODO 底部元素定位 -->
    <div class="footer_div"></div>
  </div>
</template>

<style lang="scss">
.father_div {
  width: 100%;
  height: 100vh;
  // background-color: aqua;
  .header_div {
    width: 100%;
    height: 80px;
    // background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 1px 1px #dcdfe6;
    -moz-box-shadow: 0px 1px 1px #dcdfe6;
    box-shadow: 0px 1px 1px #dcdfe6;
    .navigation_div {
      width: 1300px;
      height: 65px;
      // background-color: red;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo_div {
        width: 120px;
        height: 60px;
        background-color: chartreuse;
        margin-left: 15px;
        // 设置图片不可选择
        user-select: none;
        -webkit-user-drag: none;
        .span {
          .img {
            width: 120px;
            height: 65px;
          }
        }
      }
      .navigation_bar {
        width: 450px;
        height: 60px;
        // background-color: chocolate;
        margin-right: 15px;
        ul {
          width: 450px;
          height: 55px;
          list-style: none;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 18px;
          font-weight: normal;
          //设置导航栏字体不可被选择
          user-select: none;
          li {
            margin-right: auto;
          }
        }
        // 字体选中后变色
        ul :hover {
          color: #409eff;
        }
      }
    }
  }
}
</style>
