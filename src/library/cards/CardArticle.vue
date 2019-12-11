<template>
  <g-link :to="path" class="w-full max-w-sm flex items-stretch">
    <div class="flex-1">
      <p class="bg-gray-200 rounded inline-block px-1 uppercase font-bold text-xs text-d4gray-dark">article</p>
      <h1 class="font-bold text-d4slate-dark leading-tight">{{ title }}</h1>
      <p class="text-d4gray-dark text-sm font-medium">{{ excerpt.substr(0,30) + '...' }}</p>
      <div class="flex">
        <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.7 18.4C8.85151 18.5136 9.05421 18.5319 9.22361 18.4472C9.393 18.3625 9.5 18.1894 9.5 18V8C9.5 6.61929 8.38071 5.5 7 5.5H3C1.61929 5.5 0.5 6.61929 0.5 8V18C0.5 18.1894 0.607001 18.3625 0.776393 18.4472C0.945785 18.5319 1.14849 18.5136 1.3 18.4L5 15.625L8.7 18.4Z" stroke="#4A75D1" stroke-linejoin="round"/>
        </svg>
        <p class="text-sm text-d4gray-dark">{{readTime > 60 ? '60' : readTime }} to read</p>
      </div>
    </div>
    <g-image class="block object-cover h-24 w-24 flex-shrink-0 rounded" :src="image"></g-image>
  </g-link>
</template>

<script>
export default {
  props: {
    // faker.company.catchPhrase
    title: {
      type: String,
      required: true
    },
    // faker.lorem.paragraph
    excerpt: {
      type: String,
      required: true,
    },
    // faker.random.number
    readTime: {
      type: Number,
      requried: true
    },
    // Image
    image: {
      type: [Object, String],
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>