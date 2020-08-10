<template>
  <div>
    <el-row :gutter="20">
        <el-col :span="12">
          <el-image :src="logo" class="image"></el-image>
        </el-col>
        <el-col :span="12">
          <el-button type="text">首页</el-button>
          <el-button type="text">社区服务</el-button>
          <el-button type="text">志愿招募</el-button>
          <el-button type="text">合作交流</el-button>
          <el-button type="text">关于我们</el-button>
        </el-col>
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
  margin-top: -2rem;
}

.el-button {
  font-size: 18px;
}

.el-button+.el-button {
  margin-left:20px;
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