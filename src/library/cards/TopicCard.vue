<template>
  <g-link :href="path" class="card select-none block rounded-lg shadow hover:shadow-md p-4 max-w-lg bg-white text-gray-600" :class="{stacked}">
    <span class="flex items-center justify-between border-b border-gray-200 pb-4">
      <span class="w-12 h-12 p-3 rounded-full bg-gray-200">
        <svg class="w-6 h-6 fill-current stroke-current" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.625 13.75H6.625C6.625 13.1977 6.17728 12.75 5.625 12.75V13.75ZM5.625 18.75H4.625C4.625 19.1545 4.86864 19.5191 5.24232 19.6739C5.61599 19.8287 6.04611 19.7431 6.33211 19.4571L5.625 18.75ZM10.625 13.75V12.75C10.3598 12.75 10.1054 12.8554 9.91789 13.0429L10.625 13.75ZM15.75 0.25H4.25V2.25H15.75V0.25ZM4.625 13.75V18.75H6.625V13.75H4.625ZM6.33211 19.4571L11.3321 14.4571L9.91789 13.0429L4.91789 18.0429L6.33211 19.4571ZM10.625 14.75H15.75V12.75H10.625V14.75ZM4.25 14.75H5.625V12.75H4.25V14.75ZM0.25 4.25V7.5H2.25V4.25H0.25ZM0.25 7.5V10.75H2.25V7.5H0.25ZM19.75 10.75V7.5H17.75V10.75H19.75ZM19.75 7.5V4.25H17.75V7.5H19.75ZM4.25 12.75C3.14543 12.75 2.25 11.8546 2.25 10.75H0.25C0.25 12.9591 2.04086 14.75 4.25 14.75V12.75ZM15.75 14.75C17.9591 14.75 19.75 12.9591 19.75 10.75H17.75C17.75 11.8546 16.8546 12.75 15.75 12.75V14.75ZM4.25 0.25C2.04086 0.25 0.25 2.04086 0.25 4.25H2.25C2.25 3.14543 3.14543 2.25 4.25 2.25V0.25ZM15.75 2.25C16.8546 2.25 17.75 3.14543 17.75 4.25H19.75C19.75 2.04086 17.9591 0.25 15.75 0.25V2.25Z"/><path d="M5.625 7.5H5.6375M10 7.5H10.0125M14.375 7.5H14.3875" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="flex-auto mx-2">
        <h5 class="text-base text-black font-semibold capitalize">{{topic}}</h5>
        <p class="text-sm">Topic</p>
      </span>
      <span class="rounded bg-blue-100 text-blue-700 font-semibold py-1 px-2 text-xs"
        :class="{'bg-gray-100 text-gray-700': following}">{{ following ? 'Following' : 'Follow' }}</span>
    </span>
    <span class="flex flex-col text-base py-4">
      <h3 class="text-lg font-semibold capitalize text-black">{{title}}</h3>
      <g-image class="pointer-events-none w-full rounded object-cover my-4" :src="image" width="84" height="112"></g-image>
      <p class="block-with-text lines-2">{{excerpt}}</p>
    </span>
    <span class="flex justify-between items-center mt-4">
      <p class="text-blue-500">Read more</p>
      <svg class="w-5 h-5" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.64 14.48C9.82181 14.6164 10.0651 14.6383 10.2683 14.5367C10.4716 14.435 10.6 14.2273 10.6 14V4C10.6 2.56406 9.43594 1.4 8 1.4H4C2.56406 1.4 1.4 2.56406 1.4 4V14C1.4 14.2273 1.5284 14.435 1.73167 14.5367C1.93494 14.6383 2.17819 14.6164 2.36 14.48L6 11.75L9.64 14.48Z" stroke="#4A75D1" stroke-width="1.2" stroke-linejoin="round"/></svg>
    </span>
  </g-link>
</template>

<script>
export default {
  name: 'TopicCard',
  props: {
    topic: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    // faker.lorem.paragraph
    excerpt: String,
    path: {
      type: String,
      required: true
    },
    // faker.image.imageUrl
    image: [Object, String],
    following: Boolean,
    stacked: Boolean
  }
}
</script>

<style>
.card {
  transition: .3s;
}
.card.stacked {
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