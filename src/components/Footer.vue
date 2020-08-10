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

        <el-popover
          v-for="(icon,idx) in icons" :key="idx"
          style="text-align: center;"
          placement="top"
          trigger="hover">
          <el-image
            :src="icon.source"
            fit="fit">
          </el-image>
          <el-image
            slot="reference"
            style="width: 32px; height: 32px; margin: 10px"
            :src="icon.path"
            fit="fit">
          </el-image>
        </el-popover>

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
          path: "icon/wechat.svg",
          source: "qrcode-official.jpg"
        },
        {
          path: "icon/miniprogram.svg",
          source: "qrcode-miniprogram.jpg"
        }
      ]
    }
  }
};
</script>