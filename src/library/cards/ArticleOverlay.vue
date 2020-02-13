<template>
  <div class="bg-overlay p-6 sm:p-8 text-white bg-cover bg-center rounded-lg" :style="style"> 
    <div class="flex flex-col h-120 max-w-sm justify-between">
      <div v-if="type == 'Article'">
        <p class="text-xs uppercase leading-loose mt-2 mb-6">Article</p>
        <h1 class="text-3xl font-bold leading-tight mb-6">{{ title }}</h1>
        <p class="hidden sm:block leading-tight font-bold mb-6">{{ subtitle }}</p>
        <p>{{ excerpt }}</p>
      </div>
      <div v-else>
        <p class="m-auto w-content text-xs uppercase leading-loose mt-2 mb-6 sm:hidden">Article</p>
        <h1 class="text-2xl italic text-center sm:text-left font-bold font-serif sm:mb-8">{{ quote }}</h1>
        <p class="mb-8 hidden sm:block">{{ tagline }}</p>
        <g-link class="flex items-center px-4 py-3 border rounded-xl w-content msm:hidden">
          <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25192 5.16795L2.0547 1.03647C1.39015 0.59343 0.5 1.06982 0.5 1.86852V10.1315C0.5 10.9302 1.39015 11.4066 2.0547 10.9635L8.25192 6.83205C8.84566 6.43623 8.84566 5.56377 8.25192 5.16795Z" fill="white"/>
          </svg>
          <p class="uppercase ml-3">play excerpt</p>
        </g-link>
      </div>
      <div class="flex justify-between">
        <p v-if="type == 'Article'" class="">{{ author }}</p>
        <p v-if="type == 'Quote'" class="hidden sm:block">{{ date }}</p>
        <p v-if="type == 'Quote'" class="sm:hidden">{{ author }}</p>
        <p>{{ timeToRead > 60 ? '60' : timeToRead }} min read </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'Article'
    },
    // faker.company.catchPhrase
    title: {
      type: String
    },
    // faker.lorem.paragraph
    subtitle: {
      type: String
    },
    // faker.lorem.paragraph
    excerpt: {
      type: String
    },
    quote: {
      type: String
    },
    tagline: {
      type: String
    },
    // faker.name.findName
    author: String,
    // Image
    bgImage: [Object, String],
    // faker.random.number
    timeToRead: Number,
  },
  computed: {
    style() {
      return 'background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(' + this.bgImage + ') center center; backgroundSize: cover;'
    },
    date() {
      return new Date().toDateString()
    }
  },
  created() {
    console.log(this.date)
  }
}
</script>