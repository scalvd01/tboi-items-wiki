<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import SearchBoxComponent from '../components/SearchBoxComponent.vue'

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
  <nav >
    <div
      class="flex flex-wrap items-center justify-evenly fixed w-full z-20 top-0  p-4 borderCard pixelated border-8 border-x-4 border-b-4"
    >
      <a href="/" class="flex items-center">
        <img src="@/assets/images/Isaac_icon.webp" class="h-12 mr-2  pixelated" alt="Logo" />
        <span
          class="sm:hidden self-center text-3xl font-semibold font-upheavtt tracking-wider leading-none text_shadow title-color"
          >TBOI Items<br> Wiki</span
        >

        <span
          class="hidden sm:block md:hidden self-center text-4xl font-semibold font-upheavtt tracking-wider text_shadow title-color"
          >The Binding Of Isaac<br> Items Wiki</span
        >
        <span
          class="hidden md:block lg:hidden self-center text-4xl font-semibold font-upheavtt tracking-wider text_shadow title-color"
          >The Binding Of Isaac<br> Items Wiki</span
        >
        <span
          class="hidden  lg:block self-center text-4xl font-semibold font-upheavtt tracking-wider text_shadow title-color"
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
  border-image-repeat: round;
  /* text-align: center;
  z-index: 1; */
}
</style>
