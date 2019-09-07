<template>
  <div class="py-1 px-3 bg-gray-200 text-gray-800 flex items-center rounded-lg">
    <svg class="w-6 h-6 stroke-current" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="7.5" cy="6.75" r="5.75" stroke-width="2"/><path d="M11.25 12L16.5 17.25" stroke-width="2" stroke-linecap="round"/></g></svg>
    <input class="font-medium flex-1 mx-3 py-1 h-full bg-gray-200 text-2xl" :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  methods: {
    // @vuese
    // Use to execute the search and return results
    // @arg term String term to search for
    async search(term) {
      const results = []
      return results
    }
  }
}
</script>