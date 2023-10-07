<script setup>
import { onUpdated, ref } from 'vue'
import { useData } from '../composables/functions.js'
const { sortData } = useData()

const searchTerm = ref('')

onUpdated(() => {
  sortData(searchTerm)
})
</script>

<template>
  <input
    type="search"
    id="search-input"
    class="block w-full p-4 py-2 pl-10 text-sm bg-transparent rounded-md border-2 border-[#ae9988] focus:border-2 focus:border-[#5c5349] font-SilomBol align-baseline"
    placeholder="Search Items..."
    autocomplete="off"
    v-model="searchTerm"
  />
</template>

<style scoped>
input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 10px;
  cursor: pointer;
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 43%,
      #5c5349 45%,
      #5c5349 55%,
      rgba(0, 0, 0, 0) 57%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      135deg,
      transparent 0%,
      transparent 43%,
      #5c5349 45%,
      #5c5349 55%,
      transparent 57%,
      transparent 100%
    );
}

input:focus {
  /* border-color: inherit; */
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
