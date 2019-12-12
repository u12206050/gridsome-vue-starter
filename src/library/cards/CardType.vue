<template>
  <div class="card-type" :class="[demoColor, small && 'small']">
    <g-image class="pointer-events-none w-full rounded-t-xl object-contain h-32 px-4" :src="demoImage" width="84" height="80"></g-image>
    <div class="px-2">  
      <h1 class="text-white text-sm font-medium truncate">{{ title }}</h1>
      <p class="text-white text-xs opacity-75">{{ count }} <span>resources</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    // Image
    image: {
      type: [String, Object],
      required: true
    },
    color: {
      type: String,
      required: true,
    },
    small: {
      type: Boolean,
    }
  },
  data() {
    return {
      demoColor: [
        "bg-d4primary",
        "bg-d4secondary",
        "bg-d4green",
        "bg-d4red"
      ][Math.round(Math.random() * 3)],
      demoImage: [
        require('~/assets/library/Books.png'),
        require('~/assets/library/Folders.png'),
        require('~/assets/library/Microphone.png'),
        require('~/assets/library/PenInk.png'),
        require('~/assets/library/Podium.png'),
        require('~/assets/library/QuestionMark.png'),
        require('~/assets/library/SpeechBubble.png')
      ][Math.round(Math.random() * 6)]
    }
  }
}
</script>

<style lang="scss">
.card-type {
  @apply h-48 w-32 text-center rounded-xl;
  transition: .4s ease;

  &.small {
    @apply h-8 w-auto text-left rounded-lg;

    img {
      display: none;
    }

    >div {
      @apply flex items-center h-full;
      h1 {        
        @apply flex-1 text-left;
      }
      p {
        @apply pl-2;
        span {
          display: none;
        }
      }
    }
  }

}
</style>