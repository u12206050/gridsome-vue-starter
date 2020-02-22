<template>
  <div class="bg relative overflow-hidden text-white max-w-mobile h-120 rounded-xl flex flex-col justify-end">
    <svg fill='none' class="absolute inset-0 top-0 left-0" style="filter: blur(10px); transform: scale(3); transform-origin: center" viewBox='0 0 400 300' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns='http://www.w3.org/2000/svg'>
    <image height="400" id="svg_2" width="300" x="0" :xlink:href="icon" y="0"/></svg>
    <div class="bg-grad-dark relative z-10 rounded-xl p-6">
      <div class="m-auto relative h-48 mb-8 relative bg-cover flex flex-row items-end justify-center rounded-lg">
        <div class="relative z-10 w-1/2">
          <img class="w-full" :src="icon" />
          <div class="book-bg absolute left-0 top-0 w-1 h-full rounded-tl-lg rounded-bl-lg"></div>
          <div class="book-bg-right absolute left-0 top-0 ml-1 w-2 h-full"></div>
        </div>
        <div class="absolute bottom-0 inset-x-0 -mb-4">
          <svg class="block mx-auto w-2/3" viewBox="0 0 216 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.2183V24.0001H216V12.2183H0Z" fill="#EAEAEA"/>
            <path d="M13.7455 0.436523L0 12.2184H216L202.255 0.436523H13.7455Z" fill="url(#paint0_linear)"/>
            <path d="M13.7456 0.436523L39.2729 6.32744V0.436523H13.7456Z" fill="#D4D4D4"/>
            <defs>
            <linearGradient id="paint0_linear" x1="108" y1="0.436523" x2="108" y2="12.2184" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EAEAEA"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div class="z-10">
        <h1 class="text-2xl font-bold mb-2">{{ title }}</h1>
        <h2 class="font-bold border-b border-gray-600 pb-4 mb-2">{{ subtitle }}</h2>
        <div class="flex justify-between">
          <p>{{ author }}</p>
          <div class="flex">
            <p class="mr-4">{{ views }}</p>
            <p>{{ likes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleType: String,
    icon: {
      type: String,
      default: "https://media.activechristianity.org/2017/01/E8-What-it-Means-to-Be-a-Christian-cover.jpg"
    },
    // Image
    image: [Object, String],
    title: String,
    subtitle: String,
    author: String,
    views: Number,
    likes: Number
  },
}
</script>

<style lang="scss">
.bg-grad-dark {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 100%);
}
.book-bg {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.64) 29.17%, rgba(255, 255, 255, 0) 100%);
}
.book-bg-right {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.56) 50%, rgba(255, 255, 255, 0) 100%);
}
.bg-img {
  // background-image: url(https://media.activechristianity.org/2018/11/Ways-of-the-Lord-Cover.jpg);
}
</style>>