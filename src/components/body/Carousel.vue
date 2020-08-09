<template>
  <div class="Carousel">
    <el-carousel :interval="4000" type="card" indicator-position="outside">
      <el-carousel-item v-for="img in images" :key="img.src">
        <el-image :src="img.src"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "carousel",
  data() {
    return {
      images: [
        {
          src: "carousel/1.jpg",
        },
        {
          src: "carousel/2.jpg",
        },
        {
          src: "carousel/3.jpg",
        },
      ],
    };
  },
};
</script>