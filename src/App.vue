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
    <div class="footer_div">
      <div class="aboutMe_div">
        <div class="about_div">
          <p>yangBlog 的开源博客</p>
          <p>联系我：1084547633@qq.com</p>
        </div>
        <div class="copyrights_div">
          <div class="li_div">
            <ul>
              <li>捐赠</li>
              <li>联系</li>
              <li>关于</li>
            </ul>
          </div>
          <div class="Mecopyrights">
            <p>copyrights by yang</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.father_div {
  width: 100%;
  min-height: 100vh;
  // background-color: aqua;
  display: flex;
  flex-direction: column;
  .header_div {
    width: 100%;
    height: 80px;
    // background-color: blue;
    flex: 1 0 auto;
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
          margin: 0;
          padding: 0;
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
            margin: auto;
          }
        }
        // 字体选中后变色
        ul :hover {
          color: #409eff;
        }
      }
    }
  }
  .container_div {
    width: 100%;
    min-height: 100vh;
    background-color: #f7f8fa;
    flex: 1 1 auto;
  }
  // footer固定在底部
  .footer_div {
    width: 100%;
    height: 300px;
    background-color: black;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .aboutMe_div {
      width: 500px;
      height: 240px;
      // background-color: #409eff;
      display: flex;
      flex-direction: column;
      .about_div {
        width: 500px;
        height: 120px;
        // background-color: aqua;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 20px;
          font-weight: normal;
          margin-bottom: 5px;
        }
      }
      .copyrights_div {
        width: 500px;
        height: 120px;
        // background-color: aquamarine;
        display: flex;
        flex-direction: column;
        .li_div {
          width: 500px;
          height: 60px;
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            li {
              color: white;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-size: 13px;
              font-weight: bold;
              margin-left: 5px;
            }
          }
        }
        .Mecopyrights {
          width: 500px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 10px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
