<template>
  <g-link :href="path" class="card select-none block rounded-lg shadow hover:shadow-md p-4 max-w-lg bg-white text-gray-800" :class="{stacked}">
    <span class="flex justify-between">
      <h3 class="text-base font-semibold capitalize">{{title}}</h3>
    </span>
    <span class="flex text-base text-gray-600 items-stretch">
      <span class="flex-1 pr-1">
        <p>{{subtitle}}</p>
        <p class="mt-4 h-40 block-with-text">{{excerpt}}</p>
      </span>
      <span class="w-32 h-40 pl-1 flex justify-end" style="min-width: 84px" v-if="image">
        <g-image class="pointer-events-none w-full h-full rounded object-cover" :src="image" width="84" height="112"></g-image>
      </span>
    </span>
    <span class="flex justify-between items-center mt-4">
      <p class="text-blue-500">Read more</p>
      <svg class="w-5 h-5" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.64 14.48C9.82181 14.6164 10.0651 14.6383 10.2683 14.5367C10.4716 14.435 10.6 14.2273 10.6 14V4C10.6 2.56406 9.43594 1.4 8 1.4H4C2.56406 1.4 1.4 2.56406 1.4 4V14C1.4 14.2273 1.5284 14.435 1.73167 14.5367C1.93494 14.6383 2.17819 14.6164 2.36 14.48L6 11.75L9.64 14.48Z" stroke="#4A75D1" stroke-width="1.2" stroke-linejoin="round"/></svg>
    </span>
  </g-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    // faker.lorem.paragraph
    excerpt: String,
    path: {
      type: String,
      required: true
    },
    // faker.image.imageUrl
    image: [Object, String],
    stacked: Boolean
  }
}
</script>

<style>
.card.stacked {
  transition: .3s;
  position: relative;
  box-shadow: 0 0 0 1px #D4D4D4 !important;
}
.card.stacked:before,.card.stacked:after {
  content: '';
  width: 4px;
  transition: .3s;
  @apply block absolute rounded-r-lg;
}
.card.stacked:before {
  background: #ECECEC;
  top: 5%;
  bottom: 5%;
  right: -5px;
}
.card.stacked:after {
  background: #D4D4D4;
  top: 10%;
  bottom: 10%;
  right: -9px;
}
.card.stacked:hover {
  transform: translateX(-12px);
}
.card.stacked:hover:before {
  width: 8px;
  right: -9px;
}
.card.stacked:hover:after {
  width: 8px;
  right: -17px;
}
</style>