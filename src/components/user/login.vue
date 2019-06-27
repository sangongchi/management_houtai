<template>
  <div class="box_login" style="text-align:center">
    <el-form
      label-position="left"
      label-width="80px"
      style="margin-top:30px"
      :rules="rules"
      ref="ruleform"
      :model="form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <div style="text-align:center" class="btn">
        <el-button type="danger" @click="onSubmit('ruleform')">提交按钮</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$router.push("/");
        } else {
          alert("请输入用户名 或密码")
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.box_login {
  width: 300px;
  height: 250px;
  border: 1px solid gainsboro;
  padding: 30px;
  margin: 120px auto;
  box-shadow: 1px 2px 2px 5px gainsboro;
}
.box_login .btn {
  margin-top: 30px;
}
</style>


