<script setup>
import NavbarComponent from '../components/NavbarComponent.vue'
import BackgroundComponent from '../components/BackgroundComponent.vue'
import ItemDataComponent from '../components/ItemDataComponent.vue'
import { useRoute } from 'vue-router'
import { useFavicon } from '@vueuse/core'
import { useData } from '../composables/functions.js'
import { computed } from 'vue'
import { useTitle } from '@vueuse/core'

const { getItemByID } = useData()

const route = useRoute()

const itemData = getItemByID(route.params.id)

const favicon = computed(() => `/src/assets/images/item_icon_images/${itemData.Item_ID}.webp`)
useFavicon(favicon)

const title = computed(() => `TBOI Items Wiki | ${itemData.Item_Name}`)
useTitle(title)
</script>

<!-- <script>
import NavbarComponent from '../components/NavbarComponent.vue'
import BackgroundComponent from '../components/BackgroundComponent.vue'
import { useData } from '../composables/functions.js'

const { getItemByID } = useData()

export default {
  computed: {
    itemId() {
      return this.$route.params.id
    },
    itemData() {
      return getItemByID(this.itemId)
    }
  },
  components: { NavbarComponent, BackgroundComponent }
}
</script> -->

<template>
  <NavbarComponent />
  <BackgroundComponent>
    <main class="flex justify-center my-24 mx-3 pt-4">
      <div class="sm:w-5/6 md:w-8/12 lg:w-2/4 2xl:w-2/5">
        <ItemDataComponent :itemData="itemData" />
      </div>
    </main>
  </BackgroundComponent>
</template>

<style scoped></style>
