<template>
  <div class="w-full flex justify-around my-6 pt-4 pb-3 border border-t-2 border-t-gray-500">
    <button class="flex flex-col items-center justify-center text-gray-500 hover:text-gray-800">
      <svg class="w-8 h-8 stroke-current hover:fill-current" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 13V17H19V6.33333L11 1L3 6.33333V17H8V13C8 11 9.6875 10 11 10C12.3125 10 14 11 14 13Z"/><path d="M1 7.66667L3 6.33333M21 7.66667L19 6.33333M19 6.33333L11 1L3 6.33333M19 6.33333V17H14V13C14 11 12.3125 10 11 10C9.6875 10 8 11 8 13V17H3V6.33333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p class="block mt-1 text-sm font-semibold">Home</p>
    </button>
    <button class="flex flex-col items-center justify-center text-gray-500 hover:text-gray-800">
      <svg class="w-8 h-8 stroke-current hover:fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.50649 4L7.22078 20M16.5714 4L14.2857 20M4 8.57143H20M20 15.4286H4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p class="block mt-1 text-sm font-semibold">Topics</p>
    </button>
    <button class="flex flex-col items-center justify-center text-gray-500 hover:text-gray-800">
      <svg class="w-8 h-8 stroke-current hover:fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4V15H8V20L14 15H20V4Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 9.5H8.1M12 9.5H12.1M16 9.5H16.1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p class="block mt-1 text-sm font-semibold">Q&amp;A</p>
    </button>
    <button class="flex flex-col items-center justify-center text-gray-500 hover:text-gray-800">
      <svg class="w-8 h-8 stroke-current hover:fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 13L18 11C18 9 18 4 12 4C6 4 6 9 6 11L6 13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 20V13C17.3333 12.9999 20 12.7666 20 16.5C20 20.2333 17.3333 20 16 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 20V13C6.66667 12.9999 4 12.7666 4 16.5C4 20.2333 6.66667 20 8 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p class="block mt-1 text-sm font-semibold">Listen</p>
    </button>
    <button class="flex flex-col items-center justify-center text-gray-500 hover:text-gray-800">
      <svg class="w-8 h-8 stroke-current hover:fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 20H12H18M12 16H20V4H4V16H12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 10L10 7V13L15.5 10Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p class="block mt-1 text-sm font-semibold">Watch</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>