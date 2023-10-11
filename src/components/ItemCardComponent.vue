<script setup>
const props = defineProps(['itemImage', 'itemName', 'itemType'])
</script>

<template>
  <div class="flex justify-center h-full mb-2">
    <div class="flex flex-col items-center">
      <img
        v-if="
          itemType == 'heart' ||
          itemType == 'coin' ||
          itemType == 'bomb' ||
          itemType == 'key' ||
          itemType == 'batteries'
        "
        :src="props.itemImage"
        :alt="props.itemName + ' Icon'"
        class="h-10 pixelated lazyloaded my-4"
        loading="lazy"
        title="Item icon"
      />
      <img
        v-else
        :src="props.itemImage"
        :alt="props.itemName + ' Icon'"
        class="h-20 pixelated lazyloaded"
        loading="lazy"
        title="Item icon"
      />

      <img
        v-if="itemType == 'activated_item' || itemType == 'passive_item'"
        class="h-10 pixelated lazyloaded brightness-110 contrast-125 saturate-100"
        src="/src/assets/images/pedestal.webp"
        alt="Item Pedestal"
      />

      <h1
        class="m-auto px-4 pb-3 pt-1 text-center leading-none w-auto font-SilomBol text_shadow itemTitleBorderImage pixelated border-8 border-x-4 border-t-4 border-b-4"
      >
        {{ props.itemName }}
      </h1>
    </div>
  </div>
</template>

<style scoped>
.itemTitleBorderImage {
  /* position: relative; */
  /* box-sizing: content-box; */
  /* border: 19px solid; */
  /* background-clip: content-box; */
  border-image: url('@/assets/images/item_title.webp');
  border-image-slice: 30;
  border-image-width: 9;
  border-image-outset: 0;
  border-image-repeat: stretch;
  /* text-align: center;
  z-index: 1; */
}

.borderItemCard {
  position: relative;
  box-sizing: content-box;
  border: 30px solid;
  background-clip: content-box;
  border-image: url('@/assets/images/backgrounds/CSS_Border_Infobox.webp') 30 fill round;
  text-align: center;
  z-index: 1;
}
</style>
