<template>
  <g-link :href="path" class="card-widget block rounded shadow hover:shadow-md py-1 px-2 max-w-lg bg-white text-gray-800">
    <span class="flex justify-between items-center border-b border-solid border-gray-400 pb-1">
      <h4 class="text-base font-semibold capitalize">{{topic}}</h4>
      <svg class="block stroke-current h-6 w-6" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="#384156" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </span>
    <span class="flex pt-1">
      <span class="flex-auto w-4/5 pr-1">
        <h5 class="text-sm font-medium capitalize">{{title}}</h5>
        <p class="text-xs text-gray-600 truncate max-w-full">{{excerpt}}</p>
        <p class="text-sm pt-1 text-gray-600">{{readTime > 60 ? '> 60' : readTime }} min read</p>
      </span>
      <span class="flex-auto w-1/5 pl-1 flex justify-end" v-if="image">
        <g-image class="pointer-events-none h-16 w-16 rounded object-cover" :src="image" width="64" height="64"></g-image>
      </span>
    </span>
  </g-link>
</template>

<script>
export default {
  name: 'Widget Card',
  props: {
    topic: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    // faker.lorem.paragraph
    excerpt: String,
    path: {
      type: String,
      required: true
    },
    // faker.image.imageUrl
    image: {
      type: [Object, String],
      required: true
    },
    readTime: Number
  }
}
</script>