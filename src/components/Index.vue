<template>
  <div class="box">
    <el-container>
      <el-container>
        <!-- 侧边栏编写开始 -->
        <el-aside style="width:auto">
          <Aside></Aside>
        </el-aside>
        <!-- 侧边栏编写结束 -->

         <!-- 右侧主体区域编写开始 -->
        <el-container>

          <!-- 头部区域编写开始 -->
          <el-header>
            <Header></Header>
          </el-header>
          <!-- 头部区域编写结束 -->

          <!-- content区域编写开始 -->
          <el-main>
            <router-view></router-view>
          </el-main>
          <!-- content区域编写结束 -->

        </el-container>
        
      </el-container>
      <!-- 右侧主体区域编写结束 -->

      <!-- 底部区域编写开始 -->
      <el-footer>
        <Footer></Footer>
      </el-footer>
      <!-- 底部区域编写结束 -->
    </el-container>
  </div>
</template>
<script>
import Aside from "./Aside";
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "index",
  components: {
    Aside,
    Header,
    Footer
  }
};
</script>

<style>
body {
  width: 100%;
}
.box {
  width: 100%;
  height: 800px;
}
.box > .el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  padding: 0px;
}

.el-aside {
  background-color: #d3dce6;
}

.el-main {
  background-color: #e9eef3;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
