<template>
  <div>
    <el-row :gutter="20">
        <el-menu mode="horizontal">
          <el-menu-item>
            <el-image :src="logo" class="image"></el-image>
          </el-menu-item>
          <el-menu-item>首页</el-menu-item>
          <el-menu-item>社区服务</el-menu-item>
          <el-menu-item>志愿招募</el-menu-item>
          <el-menu-item>合作交流</el-menu-item>
          <el-menu-item>关于我们</el-menu-item>
        </el-menu>
    </el-row>
  </div>
</template>

<style scoped>
.header {
  height: 50px;
}

.image {
  max-width: 25rem;
  max-height: 10rem;
  margin-top: -3.5rem;
  margin-left: 5rem;
  margin-right: 5rem;
}

.el-menu {
  width: 100%;
  float: right;
}

.el-menu-item {
  font-size: 18px;
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