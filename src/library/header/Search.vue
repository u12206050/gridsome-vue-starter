<template>
  <div class="px-2 py-3 bg-gray-200 text-gray-800 flex rounded-lg">
    <svg class="w-8 h-8 stroke-current" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="7.5" cy="6.75" r="5.75" stroke-width="2"/><path d="M11.25 12L16.5 17.25" stroke-width="2" stroke-linecap="round"/></g></svg>
    <input class="flex-1 mx-3 h-full bg-gray-200 text-2xl" :placeholder="placeholder"
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