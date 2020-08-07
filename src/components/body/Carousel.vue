<template>
    <div class="Carousel">
        <el-carousel :interval="4000" type="card" indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    name: "carousel"
}
</script>