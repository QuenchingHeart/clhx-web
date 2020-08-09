<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="10">
        <el-image :src="logo"></el-image>
      </el-col>
      <el-col :span="10">
        <el-menu mode="horizontal">
          <el-menu-item>首页</el-menu-item>
          <el-menu-item>社区服务</el-menu-item>
          <el-menu-item>志愿招募</el-menu-item>
          <el-menu-item>合作交流</el-menu-item>
          <el-menu-item>关于我们</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.header {
  height: 50px;
}

.buttongroup {
  float: right;
}

.image {
  width: 100px;
  float: left;
  margin-top: -50px;
}
</style>

<script>
export default {
  name: "webHeader",
  data() {
    return {
      logo: "logo.png",
    };
  },
};
</script>