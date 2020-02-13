<template>
  <div class="p-4 pb-10 sm:pb-20">
    <div :style="{backgroundImage: gradient}" class="absolute inset-x-0 top-0 h-64 z-minus"></div>
    <div class="flex max-w-desktop m-auto relative z-10">
      <div class="relative w-1/2 sm:w-2/3 sm:pr-12 sm:pt-16">
        <div class="relative w-full pb-square sm:pb-wide">
          <g-image class="absolute w-full h-full inset-0 rounded-xl object-cover" :src="image"></g-image>
        </div>
      </div>
      <div class="w-1/2 sm:w-1/3 ml-5 flex flex-col justify-center">
        <h3 class="uppercase text-xs bg-d4athens text-d4gray-dark rounded px-2 text-xs w-content font-bold leading-loose sm:rounded-none sm:bg-transparent sm:px-0 sm:py-3 py-1 sm:text-d4slate-dark sm:font-normal">article</h3>
        <h1 class="font-bold text-d4slate-dark text-lg sm:py-3 py-1 leading-tight lg:text-4xl xl:text-5xl">{{ title }}</h1>
        <h2 class="text-2xl hidden lg:block text-d4slate-dark sm:py-3 py-1">{{ excerpt }}</h2>
        <h2 class="text-d4gray-dark lg:hidden sm:py-3 py-1">{{ firstName }} {{ lastName }}</h2>
        <div class="flex items-center sm:py-3 py-1">
          <svg class="w-3 mr-2 text-d4secondary stroke-current" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.7 13.4C8.85151 13.5136 9.05421 13.5319 9.22361 13.4472C9.393 13.3625 9.5 13.1894 9.5 13V3C9.5 1.61929 8.38071 0.5 7 0.5H3C1.61929 0.5 0.5 1.61929 0.5 3V13C0.5 13.1894 0.607001 13.3625 0.776393 13.4472C0.945785 13.5319 1.14849 13.5136 1.3 13.4L5 10.625L8.7 13.4Z" stroke-linejoin="round"/>
          </svg>
          <p class="text-sm text-d4gray-dark lg:hidden">{{readTime > 60 ? '60' : readTime }} min read</p>
          <p class="text-sm text-d4gray-dark hidden lg:block">{{readTime > 60 ? '60' : readTime }} min read &#8226; {{ firstName }} {{ lastName }}, in {{ category }} </p>
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
    colorA: {
      type: String,
      default: "#f7f7f7"
    },
    // faker.internet.color
    colorB: {
      type: String,
      default: "#ccd7e8"
    },
    // faker.internet.color
    colorC: {
      type: String,
      default: "#a5b1c4"
    },
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