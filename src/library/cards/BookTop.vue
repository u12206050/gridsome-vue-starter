<template>
  <div class="background max-w-sm text-center h-120 font-medium border border-gray-400 rounded-xl text-d4slate-dark p-8 pt-12">
    <g-image :src="image" class="h-56 w-40 object-cover rounded-xl mx-auto mb-8" />
    <p class="text-2xl leading-tight mb-2">{{ title }}</p>
    <p class="mb-4">{{ tagline }}</p>
    <p class="uppercase text-sm font-semibold">by {{ author }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // Image
    image: [Object, String],
    // faker.company.catchPhrase
    title: String,
    // faker.company.bs
    tagline: String,
    // faker.name.findName
    author: String,
  }
}
</script>

<style>
.background {
  background: linear-gradient(180deg, rgba(133, 41, 23, 0.1) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;
}
</style>