<template>
  <g-link :href="path" class="card w-auto select-none block rounded-lg shadow hover:shadow-md flex-shrink-0 max-w-lg w-32 bg-white text-gray-600">
    <g-image class="custom-rounded w-full object-cover h-32 rounded-b-none" :src="image" width="84" height="112"></g-image>
    <div class="p-4">
      <h1 class="font-base font-bold text-d4slate-dark">{{ title }}</h1>
      <p class="font-medium text-d4gray-dark block-with-text lines-2">{{excerpt.slice(0,100)}}...</p>
      <div class="flex justify-between ">
        <p class="text-sm pt-1 text-d4gray-dark">{{readTime > 60 ? '60' : readTime }} min read ・ {{author}}</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.64 18.48C15.8218 18.6164 16.0651 18.6383 16.2683 18.5367C16.4716 18.435 16.6 18.2273 16.6 18V8C16.6 6.56406 15.4359 5.4 14 5.4H10C8.56406 5.4 7.4 6.56406 7.4 8V18C7.4 18.2273 7.5284 18.435 7.73167 18.5367C7.93494 18.6383 8.17819 18.6164 8.36 18.48L12 15.75L15.64 18.48Z" stroke="#4A75D1" stroke-width="1.2" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
    name: 'CardShortTitle',
    props: {
      title: {
      type: String,
      required: true
      },
      // faker.lorem.paragraph
      excerpt: String,
      // Image
      image: [Object, String],
      readTime: Number,
      author: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true
      }
    }
}
</script>

<style lang="scss">
.custom-rounded {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
</style>