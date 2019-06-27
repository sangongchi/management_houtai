<template>
    <div class="head" style="text-align: right; font-size: 12px">
        
        <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span> 
      <el-dropdown>
            <i class="el-icon-user-solid" style="margin-left:15px"></i>
            <el-dropdown-menu>
                <el-dropdown-item>用户信息</el-dropdown-item>
                <el-dropdown-item>
                    <router-link to="/login">登录</router-link>
                </el-dropdown-item>
                <el-dropdown-item @click.native="logout()">注册</el-dropdown-item>
                <el-dropdown-item>登出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <!-- <el-menu 
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect" 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        width="100%"
        >
            <el-menu-item index="1">
                处理中心
            </el-menu-item>

            <el-submenu index="2">  
                <template slot="title">我的工作台</template>
                <el-menu-item idnex="2-1">选项一</el-menu-item>
                <el-menu-item idnex="2-2">选项二</el-menu-item>
                <el-menu-item idnex="2-3">选项三</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项四</template>
                    <el-menu-item index="2-4-1">选项一</el-menu-item>
                </el-submenu>
            </el-submenu>
            
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单中心</el-menu-item>
        </el-menu> -->
    </div>
</template>
<script>
export default {
    name:"he",
    data(){
        return{
            activeIndex:'1',
            activeIndex2:'1'
        }
    },
    methods:{
        handleSelect(key,keypath){
            console.log(key,keypath)
        },
        logout(){
            console.log("准备注册"),
            
            this.$router.push('/regiter')
        }
    }
}
</script>
<style scoped> 
    .head{
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
        margin-right:30px;
    }
    .head >.el-menu{
        padding:0px;
    }
</style>


