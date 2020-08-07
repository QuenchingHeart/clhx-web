<template>
    <div class="Card">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    </div>
</template>

<style scoped>
.box-card {
    width: 480px;
    height: 600px;
    margin:0 auto;
}
</style>

<script>
export default {
    name: "card"
}
</script>