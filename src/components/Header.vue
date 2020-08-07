<template>
    <div class="header">
        <el-image :src="src" class="image"></el-image>
        <div class="buttongroup">
            <el-button type="text">无敌</el-button>
            <el-button type="text">无敌</el-button>
            <el-button type="text">无敌</el-button>
            <el-button type="text">无敌</el-button>
        </div>
    </div>
</template>

<style scoped>
.header {
    height: 50px
}

.buttongroup {
    float: right
}

.image {
    width:100px;
    height:100px;
    float: left;
    margin-top: -50px;
}
</style>

<script>

export default {
    name: "webHeader",
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
}
</script>