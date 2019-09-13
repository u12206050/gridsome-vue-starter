<template>
  <div class="flex flex-wrap">
    <div class="flex-auto w-64 relative opacity-75 hover:opacity-100 bg-black cursor-pointer" style="min-width: 200px">
      <g-image class="w-full h-full object-cover object-center" :src="prevImage"></g-image>
      <div class="w-full h-full font-semibold absolute inset-0 flex flex-col items-center justify-center text-center" style="background: rgba(0,0,0,.24); padding: 16% 1rem 8%">
        <h4 class="text-xs uppercase text-gray-400">{{prevTopic}}</h4>
        <h1 class="w-52 text-2xl font-black capitalize text-white flex-auto">{{prevTitle}}</h1>
        <p class="text-sm uppercase text-gray-200">PREVIOUS</p>
      </div>
    </div>
    <div class="flex-auto w-64 relative opacity-75 hover:opacity-100 bg-black cursor-pointer" style="min-width: 200px">
      <g-image class="w-full h-full object-cover object-center" :src="nextImage"></g-image>
      <div class="w-full h-full font-semibold absolute inset-0 flex flex-col items-center justify-center text-center" style="background: rgba(0,0,0,.24); padding: 16% 1rem 8%">
        <h4 class="text-xs uppercase text-gray-400">{{nextTopic}}</h4>
        <h1 class="w-52 text-2xl font-black capitalize text-white flex-auto">{{nextTitle}}</h1>
        <p class="text-sm uppercase text-gray-200">NEXT</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // faker.company.catchPhrase
    prevTitle: String,
    // faker.company.catchPhrase
    nextTitle: String,
    // faker.company.bsNoun
    prevTopic: String,
    // faker.company.bsNoun
    nextTopic: String,
    // faker.image.nature
    prevImage: [Object, String],
    // faker.image.nightlife
    nextImage: [Object, String],
  }
}
</script>