<template>
    <div class="box">
        <el-form label-position="left" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="repassword"></el-input>
            </el-form-item>
            <div  class="btn" style="text-align:center">
                <el-button type="success" round >提交按钮</el-button>
            </div>
        </el-form>
    </div>
</template>
<script>
export default {
    name:"regiter",
    data(){
        return{
            username:"",
            password:"",
            repassword:""
        }
    }
}
</script>
<style scoped>
    .box{
        width:350px;
        height:300px;
        padding:40px;
        padding-top:80px;
        margin:150px auto;
        border: 2px solid gainsboro;
        box-shadow: 1px 5px 6px 3px gainsboro;
    }
    .box .btn{
        margin-top:25px;
    }
</style>

