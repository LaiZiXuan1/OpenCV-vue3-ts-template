<script lang="ts" setup>
import { onMounted, nextTick, inject, ref } from "vue";
import { cv } from "../plugins/opencv.ts";

const imgRef = ref();
const canvasRef = ref();

onMounted(() => {
  nextTick(() => {
    window.onload = () => {
      console.log(cv, "MethodName ==> cv");
      // 加载图像
      const image = cv.imread('../assets/window.png');
      // const grayImage = new cv.Mat();
      //
      // cv.cvtColor(image, grayImage, cv.COLOR_BGR2GRAY);
      // cv.imshow(canvasRef.value, grayImage);
      // 显示图像
      // cv.waitKey();
    };
  });
});
</script>

<template>
  <div class="Home">
    <img ref="imgRef" src="../assets/window.png" alt="" />
    <canvas ref="canvasRef" width="500" height="500"></canvas>
  </div>
</template>

<style scoped lang="scss">
.Home {
}
</style>
