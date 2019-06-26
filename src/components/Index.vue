<template>
  <div class="box">
    <el-container>
      <!-- 头部区域编写开始 -->
      <el-header>Header</el-header>
      <!-- 头部区域编写结束 -->

      <!-- 中间主体区域编写开始 -->


      <el-container>
        <!-- 侧边栏编写开始 -->
        <el-aside style="width:auto">
            <Aside></Aside>
        </el-aside>
        <!-- 侧边栏编写结束 -->

        <!-- content区域编写开始 -->
        <el-container>
          <el-main>Main</el-main>
        </el-container>
        <!-- content区域编写结束 -->

      </el-container>
      <!-- 中间主体区域编写结束 -->


      <!-- 底部区域编写开始 -->
      <el-footer>Footer</el-footer>
      <!-- 底部区域编写结束 -->
    </el-container>
  </div>
</template>
<script>
import Aside from './Aside'

export default {
  name: "index",
  components:{
      Aside
  }
};
</script>

<style>
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
