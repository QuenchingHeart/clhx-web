<template>
    <div class="Content">
        <Carousel></Carousel>
        <el-row>
            <el-col :span="8">
                <Card></Card>
            </el-col>
            <el-col :span="8">
                <Card></Card>
            </el-col>
            <el-col :span="8">
                <Card></Card>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>

</style>

<script>
import Card from "./body/Card.vue"
import Carousel from "./body/Carousel.vue"

export default {
    name: "webBody",
    components:{
        Card,
        Carousel
    }
}
</script>