<script setup>
// const edge_right = document.getElementById('edge-right')
window.addEventListener('scroll', function () {
  document.getElementById('edge-right').style.backgroundPositionY = '-' + window.scrollY + 'px'
  document.getElementById('edge-left').style.backgroundPositionY = '-' + window.scrollY + 'px'
  document.getElementById('bg_img').style.backgroundPositionY = '-' + window.scrollY + 'px'
})

</script>

<template>
  <div ref="el">
    <div class="pixelated" id="bg_img"></div>
    <div
      id="edge-right"
      class="origin-right scale-x-50 sm:scale-x-75 md:scale-x-90 lg:scale-x-100 pixelated"
    ></div>
    <div
      id="edge-left"
      class="origin-left scale-x-50 sm:scale-x-75 md:scale-x-90 lg:scale-x-100 pixelated"
    ></div>
  </div>
  <slot></slot>
</template>

<style>
#edge-left {
  z-index: -9;
  position: fixed;
  top: 0;
  left: 0;
  width: 116px;
  height: 100%;
  background: url('@/assets/images/backgrounds/edge_left.webp');
}
#edge-right {
  z-index: -9;
  position: fixed;
  top: 0;
  right: 0;
  width: 116px;
  height: 100%;
  background: url('@/assets/images/backgrounds/edge_right.webp');
}
#bg_img {
  z-index: -10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center 0;
  background-repeat: repeat;
  background-image: url('@/assets/images/backgrounds/bg.gif');
}
</style>
