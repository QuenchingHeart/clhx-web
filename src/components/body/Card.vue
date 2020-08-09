<template>
  <div>
    <el-card :style="{ height: cardHeight }">
      <div slot="header" class="clearfix">
        <span style="float: left; font-size: 20px">{{ cardName }}</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多...</el-button>
      </div>
      <div v-for="(content, idx) in cardContent" :key="idx" class="text item">
        <el-row v-if="idx < 14">
          <el-col :span="20">
            <el-link type="primary" style="float: left">
              {{ content.title.length > 28 ? content.title.slice(0,28) + "..." : content.title }}
            </el-link>
          </el-col>
          <el-col :span="4">
            {{ content.date }}
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<style>

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    height: 400px;
  }

</style>

<script>
export default {
  name: "card",
  props: [
    "cardName", "cardContent", "cardHeight"
  ]
};
</script>