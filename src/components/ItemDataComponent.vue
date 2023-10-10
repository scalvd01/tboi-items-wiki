<script setup>
import { computed } from 'vue'

const props = defineProps(['itemData'])

const empty_stars = computed(() => 4 - props.itemData.Item_Quality)
</script>

<template>
  <div
    class="flex flex-col justify-center itemInfoBg pixelated border-8 bg-[#eee2d1] m-3 mx-1 relative"
  >
  <!-- <router-link to="/" class="absolute -top-6 -right-4 "><img src="src/assets/images/button_back.webp" alt=""></router-link> -->
  <router-link to="/" class="absolute -bottom-6 -right-4 "><img src="/src/assets/images/button_back.webp" alt=""></router-link>
  
    <!-- title -->
    <div class="flex flex-col items-center mb-4 mt-2">
      <h1
        class="font-upheavtt text_shadow text-2xl pb-3 px-6 itemTitleBorderImage pixelated border-8 border-x-4 border-t-4 border-b-4 flex justify-center"
      >
        {{ props.itemData.Item_Name }}
      </h1>
    </div>
    <!-- images -->
    <div class="flex justify-center mb-4">
      <div class="flex flex-col">
        <!-- item image -->
        <img
          class="flex justify-center h-20 pixelated lazyloaded"
          :src="`/src/assets/images/item_icon_images/${props.itemData.Item_ID}.webp`"
          alt=""
        />
        <!-- pedestal icon -->
        <div
          v-if="
            props.itemData.Item_Type == 'activated_item' ||
            props.itemData.Item_Type == 'passive_item'
          "
          class="flex justify-center col-start-1 row-start-2"
        >
          <img
            class="h-10 pixelated lazyloaded brightness-110 contrast-125 saturate-100"
            src="/src/assets/images/pedestal.webp"
            alt="Item Pedestal"
          />
        </div>
      </div>
      <!-- recharge icon -->
      <div v-if="props.itemData.Item_Type" class="col-start-2 row-start-1">
        <img
          v-if="props.itemData.Item_Recharge_Time != 'Recharge_variable'"
          class="h-20 pixelated lazyloaded"
          :src="`/src/assets/images/item_icon_images/${props.itemData.Item_Recharge_Time}.webp`"
          alt=""
        />
        <img
          v-else
          class="h-20 pixelated lazyloaded"
          :src="`/src/assets/images/item_icon_images/${props.itemData.Item_Recharge_Time}.gif`"
          alt=""
        />
      </div>
    </div>
    <!-- data -->
    <div class="text-center divide-y divide-[#caaca4]/80 mx-10 flex flex-col">
      <!-- quote -->
      <div>
        <h1
          v-if="props.itemData.hasOwnProperty('Quote')"
          class="leading-none text-lg font-upheavtt text_shadow2 my-1"
        >
          "{{ props.itemData.Quote }}"
        </h1>
      </div>
      <!-- item id -->
      <div v-if="props.itemData.hasOwnProperty('Item_ID')" class="my-1">
        <h1 class="text-lg font-upheavtt text_shadow2">Entity ID</h1>
        <h1 class="font-SilomBol">{{ props.itemData.Item_ID }}</h1>
      </div>
      <!-- item type -->
      <div v-if="props.itemData.hasOwnProperty('Item_Type')" class="my-1">
        <h1 class="text-lg font-upheavtt text_shadow2">Item Type</h1>
        <h1 class="font-SilomBol">{{ props.itemData.Item_Type.replace('_', ' ') }}</h1>
      </div>
      <!-- item recharge time -->
      <div v-if="props.itemData.hasOwnProperty('Item_Recharge_Time')" class="my-1">
        <h1 class="text-lg font-upheavtt text_shadow2">Recharge time</h1>
        <h1 class="font-SilomBol">{{ props.itemData.Item_Recharge_Time.replace('_', ' ') }}</h1>
      </div>
      <!-- item quality -->
      <div v-if="props.itemData.hasOwnProperty('Item_Quality')" class="my-1">
        <h1 class="text-lg font-upheavtt text_shadow2">Item Quality</h1>
        <div class="flex justify-center items-baseline">
          <h1 class="font-SilomBol pr-1">
            {{ props.itemData.Item_Quality }}
          </h1>
          <img
            v-for="index in props.itemData.Item_Quality"
            :key="index"
            src="/src/assets/images/Item_quality_full.webp"
            alt="Item_quality_full"
            class="pixelated lazyloaded"
          />
          <img
            v-for="index in empty_stars"
            :key="index"
            src="/src/assets/images/Item_quality_empty.webp"
            alt="Item_quality_full"
            class="pixelated lazyloaded"
          />
        </div>
      </div>
      <!--  worth -->
      <div v-if="props.itemData.hasOwnProperty('Worth')" class="my-1">
        <h1 class="text-lg font-upheavtt text_shadow2">Worth</h1>
        <div v-if="props.itemData.Item_Type == 'heart'" class="flex justify-center items-baseline">
          <img
            v-for="(item, index) in props.itemData.Worth"
            :key="index"
            :src="`/src/assets/images/item_icon_images/${item}.webp`"
            alt="Item_quality_full"
            class="pixelated lazyloaded"
          />
        </div>
        <h1 v-if="props.itemData.Item_Type == 'coin'" class="font-SilomBol">
          {{ props.itemData.Worth }}
        </h1>
        <h1 v-if="props.itemData.Item_Type == 'bomb'" class="font-SilomBol">
          {{ props.itemData.Worth }}
        </h1>
        <h1 v-if="props.itemData.Item_Type == 'key'" class="font-SilomBol">
          {{ props.itemData.Worth }}
        </h1>
        <h1 v-if="props.itemData.Item_Type == 'batteries'" class="font-SilomBol">
          {{ props.itemData.Worth }}
        </h1>
      </div>
      <!-- item unlock method -->
      <div v-if="props.itemData.hasOwnProperty('Unlock_Method')" class="my-1">
        <h1 class="text-lg font-upheavtt text_shadow2">Unlock Method</h1>
        <h1 class="font-SilomBol">{{ props.itemData.Unlock_Method }}</h1>
      </div>
      <!-- item probability -->
      <div v-if="props.itemData.hasOwnProperty('Probability')" class="my-1">
        <h1 class="text-lg font-upheavtt text_shadow2">Probability</h1>
        <h1 class="font-SilomBol">{{ props.itemData.Probability }}</h1>
      </div>
      <!-- item decription -->
      <div v-if="props.itemData.hasOwnProperty('Description')" class="my-1 pb-3">
        <h1 class="text-lg font-upheavtt text_shadow2">Description</h1>
        <h1 class="font-SilomBol leading-none text-left">{{ props.itemData.Description }}</h1>
      </div>
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
.itemInfoBg {
  /* position: relative; */
  /* box-sizing: content-box; */
  /* border: 10px solid; */
  background-clip: content-box;
  border-image: url('@/assets/images/backgrounds/item_info1.webp');
  border-image-slice: 30;
  border-image-width: 4;
  border-image-outset: 1 2 3 1;
  border-image-repeat: stretch;
  /* text-align: center;
  z-index: 1; */
}
</style>
