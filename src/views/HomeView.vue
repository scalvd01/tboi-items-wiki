<script setup>
import NavbarComponent from '../components/NavbarComponent.vue'

import ItemCardComponent from '../components/ItemCardComponent.vue'

import { useData } from '../composables/functions.js'
import BackgroundComponent from '../components/BackgroundComponent.vue'

const { filteredList } = useData()

const itemList = filteredList

// window.onpopstate = function () {
//   location.reload()
// }
</script>

<template>
  <NavbarComponent />
  <BackgroundComponent
    ><main
      class="mt-24 mb-4 mx-6 sm:mx-10 md:mx-12 pt-14 grid justify-items-center grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9"
    >
      <div v-for="item in itemList" :key="item.Item_ID">
        <router-link :to="`/item/${item.Item_ID}`">
          <ItemCardComponent :itemImage="`/src/assets/images/item_icon_images/${item.Item_ID}.webp`" :itemName="item.Item_Name" :itemType="item.Item_Type"
        /></router-link>
      </div></main
  ></BackgroundComponent>
</template>
