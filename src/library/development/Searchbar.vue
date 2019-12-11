<template>
<div class="flex bg-gray-200 w-full p-4">
  <div class="flex flex-1 bg-white h-8 rounded-lg items-center px-1">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.66675" cy="6" r="5.5" stroke="#384156"/>
      <path d="M10 10.6667L14.6667 15.3333" stroke="#384156" stroke-linecap="round"/>
    </svg>
    <p class="text-xs bg-gray-600 p-1 mx-1 leading-none rounded uppercase text-white font-medium">tag</p>
    <input class="flex-1 w-8" v-model="searchInput" type="text" placeholder="Search">
    <button @click="clearInput">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7L12 12M17 17L12 12M12 12L17 7M12 12L7 17" stroke="#4F4F4F" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
  <button class="flex-shrink-0 px-1 sm:px-2 lg:px-4">Cancel</button>
  <div class="bg-white w-8 rounded-lg flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 12.5H12.5C13.0523 12.5 13.5 12.0523 13.5 11.5V2C13.5 1.44772 13.0523 1 12.5 1H3.5C2.94772 1 2.5 1.44772 2.5 2V12.5ZM2.5 12.5V14C2.5 14.5523 2.94772 15 3.5 15H12.5" stroke="#384156" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 10V6M8 4V6M8 6H6M8 6H10" stroke="#384156" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    clearInput() {
      this.searchInput = ''
    }
  }
  
}
</script>