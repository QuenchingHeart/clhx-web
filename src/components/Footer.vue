<template>
  <div>
    <el-image src="favicon.png" style="width: 50px; height: 50px"></el-image>
    <el-footer>
      <p>
        版权所有 © 2020：南京市江宁区淬炼红心社会工作服务中心
      </p>
      <p>
        地址：江苏省南京市江宁区将军大道29号南京航空航天大学学生发展中心226号 邮政编码：210006
      </p>

      <div style="text-align: center;">
        <el-link
          v-for="(icon, idx) in icons" :key="idx"
          :href="icon.url"
          :underline="false">
          <el-image
            style="width: 32px; height: 32px; margin: 10px"
            :src="icon.path"
            fit="fit">
          </el-image>
        </el-link>
      </div>
      
    </el-footer>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "webFooter",
  data() {
    return {
      icons: [
        {
          path: "icon/wechat.svg"
        },
        {
          path: "icon/miniprogram.svg"
        },
        {
          path: "icon/github.svg",
          url: "https://github.com/QuenchingHeart"
        }
      ]
    }
  }
};
</script>