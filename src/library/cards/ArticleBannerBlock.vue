<template>
  <div :style="{backgroundImage: gradient}" class="p-4">
    <div class="flex max-w-lg mx-auto">
      <g-image class="w-1/2 sm:w-2/3 rounded-xl h-40 w-40 object-cover sm:h-full sm:h-30" :src="image"></g-image>
      <div class="w-1/2 sm:w-1/3 ml-5 sm:mt-20">
        <h3 class="uppercase text-xs bg-d4athens text-d4gray-dark rounded px-2 text-xs w-content font-bold mb-2 leading-loose sm:rounded-none sm:bg-transparent sm:p-0 sm:text-d4slate-dark sm:font-normal sm:mb-6">article</h3>
        <h1 class="font-bold text-d4slate-dark text-lg mb-2 leading-tight sm:text-6xl sm:mb-6">{{ title }}</h1>
        <h2 class="text-2xl sm:hidden sm:block text-d4slate-dark sm:mb-6">{{ excerpt }}</h2>
        <h2 class="text-d4gray-dark mb-2">{{ firstName }} {{ lastName }}</h2>
        <div class="flex items-center">
          <svg class="w-3 mr-2 text-d4secondary stroke-current" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.7 13.4C8.85151 13.5136 9.05421 13.5319 9.22361 13.4472C9.393 13.3625 9.5 13.1894 9.5 13V3C9.5 1.61929 8.38071 0.5 7 0.5H3C1.61929 0.5 0.5 1.61929 0.5 3V13C0.5 13.1894 0.607001 13.3625 0.776393 13.4472C0.945785 13.5319 1.14849 13.5136 1.3 13.4L5 10.625L8.7 13.4Z" stroke-linejoin="round"/>
          </svg>
          <p class="text-sm text-d4gray-dark sm:hidden">{{readTime > 60 ? '60' : readTime }} min read</p>
          <p class="text-sm text-d4gray-dark msm:hidden msm:block">{{readTime > 60 ? '60' : readTime }} min read &#8226; {{ firstName }} {{ lastName }}, in {{ category }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function hex2rgb(hex) {
  hex = hex.replace('#','');
  return [
    parseInt(hex.substring(0,2), 16),
    parseInt(hex.substring(2,4), 16),
    parseInt(hex.substring(4,6), 16)
  ]
}
function rgba(color, opacity = 100){
  if (typeof color === "string")
    color = hex2rgb(color)

  return `rgba(${color[0]},${color[1]},${color[2]},${opacity/100})`
}
export default {
  name: 'ArticleBannerBlock',
  props: {
    // faker.internet.color
    colorA: String,
    // faker.internet.color
    colorB: String,
    // faker.internet.color
    colorC: String,
    title: {
      type: String
    },
    // Image
    image: [Object, String],
    category: {
      type: String
    },
    readTime: Number,
    // firstName
    firstName: {
      type: String
    },
    // lastName 
    lastName: {
      type: String
    },
    // Excerpt
    excerpt: {
      type: String
    }
  },
  computed: {
    gradient() {
      const {colorA,colorB,colorC} = this
      return `linear-gradient(0, #fff 0%, #fff 70%, rgba(255,255,255,0.5) 80%, rgba(255,255,255,0) 100%), linear-gradient(90deg, ${rgba(colorA, 46)}, ${rgba(colorB, 46)} 50%, ${rgba(colorC, 46)} 100%)`
    }
  }
}
</script>