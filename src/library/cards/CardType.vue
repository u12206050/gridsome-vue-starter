<template>
  <div class="h-48 w-32 rounded-xl text-center" :class="demoColor">
    <g-image class="pointer-events-none w-full rounded-t-xl object-cover h-32 p-4" :src="demoImage" width="84" height="80"></g-image>
    <div class="p-2">  
      <h1 class="text-white text-sm font-medium">{{ title }}</h1>
      <p class="text-white text-xs opacity-75">{{ count }} resources</p>
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
    // image: {
    //   type: [String, Object],
    //   required: true
    // },
    //
    // color: {
    //   type: String,
    //   required: true,
    //   default: "bg-d4green"
    // }
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