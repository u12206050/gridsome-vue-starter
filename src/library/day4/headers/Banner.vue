<template>
  <div class="block w-full relative overflow-hidden" :class="display == 'split' ? 'flex-wrap flex items-stretch' : ''">
    <g-image class="relative z-10 flex-1 object-cover" :class="display == 'split' ? 'w-mobile' : 'w-full h-tablet'" :src="image"></g-image>
    <div class="flex-1 flex justify-center items-center z-20 p-3"
      :class="display == 'split' ? 'inset-y-0 right-0 w-1/2' : 'inset-x-0 bottom-0'"
      :style="{background: gradient}">
      <div class="text-center w-mobile leading-tight py-12">
        <h4 class="font-semibold text-sm uppercase text-gray-700">{{topic}}</h4>
        <h1 class="font-bold text-3xl capitalize my-3">{{title}}</h1>
        <h2 class="font-semibold text-md uppercase text-gray-700">{{subtitle}}</h2>
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
function getBrightness(rgb) {
  return ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000
}

export default {
  props: {
    // faker.company.catchPhrase
    title: String,
    // faker.company.bsNoun
    topic: String,
    // faker.hacker.phrase
    subtitle: String,
    // Image
    image: [Object, String],
    // faker.internet.color
    colorA: String,
    // faker.internet.color
    colorB: String,
    // faker.internet.color
    colorC: String,
    dark: Boolean,
    display: {
      // options: split,full,default
      type: String,
      default: 'full'
    }
  },
  computed: {
    gradient() {
      const { colorA, colorB, colorC, display, dark } = this
      const bg = dark ? '#000' : '#FFF'

      switch(display) {
        case 'split':
          let top = '#fff'; //getBrightness(hex2rgb(colorA)) > 255/2 ? '#FFF' : '#000'
          return `linear-gradient(90deg, ${rgba(colorB, 14)} 0%, transparent 50%, ${rgba(colorC, 14)} 100%), linear-gradient(0deg, ${rgba(colorA, 46)} 0%, white)`
        default:
          //return `linear-gradient(to top, ${bg}, transparent 100%), linear-gradient(to left, transparent 0%, ${bg} 50%, transparent 100%), linear-gradient(to right, ${rgba(colorA,46)}, ${rgba(colorB, .46)} 50%, ${rgba(colorC, .46)} 100%)`
          return `linear-gradient(135deg, ${rgba(colorA, 46)}, transparent 32%), linear-gradient(-135deg, ${rgba(colorC, 46)}, transparent 32%), linear-gradient(-180deg, ${rgba(colorB,16)}, transparent 46%)`
      }
    },
    isDark() {
      const { colorA, colorB, colorC } = this
      let brightness = getBrightness(hex2rgb(colorA)) * 3
      brightness += getBrightness(hex2rgb(colorB)) * 2
      brightness += getBrightness(hex2rgb(colorC))

      return brightness/6 < 255/2
    }
  }
}
</script>