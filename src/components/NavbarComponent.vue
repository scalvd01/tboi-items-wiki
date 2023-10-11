<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import SearchBoxComponent from '../components/SearchBoxComponent.vue'
import { useData } from '../composables/functions.js'
const { sortItemsByType } = useData()

onMounted(() => {
  initFlowbite()
})

// const focus = ref(false)
// const focusInput = () => {
//   console.log('focuseado')
//   document.getElementById('search-input-sm').focus()
// }
</script>

<template>
  <nav>
    <div
      class="flex flex-wrap items-center justify-evenly fixed w-full z-20 top-0 p-4 borderCard pixelated border-8 border-x-4 border-b-4"
    >
      <a href="/" class="flex items-center">
        <img src="@/assets/images/Isaac_icon.webp" class="h-12 mr-2 pixelated" alt="Logo" />
        <span
          class="sm:hidden self-center text-xl font-semibold font-upheavtt tracking-wider leading-none text_shadow title-color"
          >TBOI Items<br />
          Wiki</span
        >

        <span
          class="hidden sm:block md:hidden self-center text-4xl font-semibold font-upheavtt tracking-wider text_shadow title-color"
          >The Binding Of Isaac<br />
          Items Wiki</span
        >
        <span
          class="hidden md:block lg:hidden self-center text-4xl font-semibold font-upheavtt tracking-wider text_shadow title-color"
          >The Binding Of Isaac<br />
          Items Wiki</span
        >
        <span
          class="hidden lg:block self-center text-4xl font-semibold font-upheavtt tracking-wider text_shadow title-color"
          >The Binding Of Isaac Items Wiki</span
        >
      </a>
      <div class="flex md:order-2">
        <!-- boton despliegue de búsqueda en movil -->
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          class="md:hidden hover:bg-[#ae9988] focus:outline-none rounded-lg text-sm p-2.5 mr-1"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <!-- búsqueda de otras pantallas -->
          <SearchBoxComponent />
        </div>
      </div>

      <!-- filter dropdown button -->
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="hover:bg-[#ae9988] focus:outline-none rounded-lg text-sm p-2.5 mr-1"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-adjustments-horizontal"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M4 6l8 0"></path>
          <path d="M16 6l4 0"></path>
          <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M4 12l2 0"></path>
          <path d="M10 12l10 0"></path>
          <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M4 18l11 0"></path>
          <path d="M19 18l1 0"></path>
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200 divide-y divide-[#caaca4]/80"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <button
              @click="sortItemsByType('all')"
              class="block px-4 py-2 hover:bg-[#ae9988] focus:outline-none w-full font-SilomBol text_shadow2"
              type="button"
            >
              All items
            </button>
          </li>
          <li>
            <button
              @click="sortItemsByType('activated_item')"
              class="block px-4 py-2 hover:bg-[#ae9988] focus:outline-none w-full font-SilomBol text_shadow2"
              type="button"
            >
              Activated Item
            </button>
          </li>
          <li>
            <button
              @click="sortItemsByType('passive_item')"
              class="block px-4 py-2 hover:bg-[#ae9988] focus:outline-none w-full font-SilomBol text_shadow2"
              type="button"
            >
              Passive Item
            </button>
          </li>
          <li>
            <button
              @click="sortItemsByType('trinket')"
              class="block px-4 py-2 hover:bg-[#ae9988] focus:outline-none w-full font-SilomBol text_shadow2"
              type="button"
            >
              Trinkets
            </button>
          </li>
          <li>
            <button
              @click="sortItemsByType('heart')"
              class="block px-4 py-2 hover:bg-[#ae9988] focus:outline-none w-full font-SilomBol text_shadow2"
              type="button"
            >
              Hearts
            </button>
          </li>
          <li>
            <button
              @click="sortItemsByType('coin')"
              class="block px-4 py-2 hover:bg-[#ae9988] focus:outline-none w-full font-SilomBol text_shadow2"
              type="button"
            >
              Coins
            </button>
          </li>
          <li>
            <button
              @click="sortItemsByType('bomb')"
              class="block px-4 py-2 hover:bg-[#ae9988] focus:outline-none w-full font-SilomBol text_shadow2"
              type="button"
            >
              Bombs
            </button>
          </li>
          <li>
            <button
              @click="sortItemsByType('key')"
              class="block px-4 py-2 hover:bg-[#ae9988] focus:outline-none w-full font-SilomBol text_shadow2"
              type="button"
            >
              Keys
            </button>
          </li>
          <li>
            <button
              @click="sortItemsByType('batteries')"
              class="block px-4 py-2 hover:bg-[#ae9988] focus:outline-none w-full font-SilomBol text_shadow2"
              type="button"
            >
              Batteries
            </button>
          </li>
        </ul>
      </div>

      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <!-- búsqueda de movil -->
          <SearchBoxComponent />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.borderCard {
  /* position: relative; */
  /* box-sizing: content-box; */
  /* border: 19px solid; */
  /* background-clip: content-box; */
  border-image: url('@/assets/images/backgrounds/CSS_Border_Infobox.webp');
  border-image-slice: 40;
  border-image-width: 15;
  border-image-outset: 0;
  border-image-repeat: stretch;
  /* text-align: center;
  z-index: 1; */
}
</style>
