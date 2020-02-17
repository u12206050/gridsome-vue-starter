<template>
  <div class="feature max-w-sm h-120 border border-gray-400 rounded-xl p-6 pt-12 text-d4slate-dark flex flex-col">
    <div class="text-center mb-6">
      <svg class="mx-auto" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="18" fill="#FFAE0C"/>
        <rect x="26.667" y="45.333" width="8" height="8" rx="3" fill="white"/>
        <path d="M16 13.6665C16 12.0096 17.3431 10.6665 19 10.6665H21C22.6569 10.6665 24 12.0096 24 13.6665V23.6665C24 25.3234 22.6569 26.6665 21 26.6665H19C17.3431 26.6665 16 25.3234 16 23.6665V13.6665Z" fill="white"/>
        <path d="M26.667 29.6665C26.667 28.0096 28.0101 26.6665 29.667 26.6665H31.667C33.3238 26.6665 34.667 28.0096 34.667 29.6665V39.6665C34.667 41.3234 33.3238 42.6665 31.667 42.6665H29.667C28.0101 42.6665 26.667 41.3234 26.667 39.6665V29.6665Z" fill="white"/>
        <path d="M40 13.6665C40 12.0096 41.3431 10.6665 43 10.6665H45C46.6569 10.6665 48 12.0096 48 13.6665V31.6665C48 33.3234 46.6569 34.6665 45 34.6665H43C41.3431 34.6665 40 33.3234 40 31.6665V13.6665Z" fill="white"/>
        <path d="M16 13.6665C16 12.0096 17.3431 10.6665 19 10.6665H34.3333C35.9902 10.6665 37.3333 12.0096 37.3333 13.6665V15.6665C37.3333 17.3234 35.9902 18.6665 34.3333 18.6665H19C17.3431 18.6665 16 17.3234 16 15.6665V13.6665Z" fill="white"/>
        <path d="M26.667 29.6665C26.667 28.0096 28.0101 26.6665 29.667 26.6665H45.0003C46.6572 26.6665 48.0003 28.0097 48.0003 29.6665V31.6665C48.0003 33.3234 46.6572 34.6665 45.0003 34.6665H29.667C28.0101 34.6665 26.667 33.3234 26.667 31.6665V29.6665Z" fill="white"/>
      </svg>
      <p class="uppercase text-sm leading-loose">{{ topic }}</p>
    </div>
    <div class="text-center mb-8 flex-grow">
      <p class=" text-3xl font-semibold mb-4">{{ title }}</p>
      <p class="text-lg block-with-text lines-4">{{ content }}</p>
    </div>
    <div class="flex justify-between text-d4gray-dark uppercase">
      <p>{{ author }}</p>
      <p>{{ timeToRead }} min read</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Image
    image: [Object, String],
    // faker.hacker.adjective
    topic: String,
    // faker.company.catchPhrase
    title: String,
    // faker.lorem.sentences
    content: String,
    // faker.name.findName
    author: String,
    timeToRead: {
      type: Number,
      default: 32
    }
  }
}
</script>

<style lang="scss">
.feature {
  background: linear-gradient(180deg, rgba(255, 174, 12, 0.1) 0%, rgba(255, 255, 255, 0) 92.29%), #FFFFFF;
}
</style>
