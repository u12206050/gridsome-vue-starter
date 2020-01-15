<template>
  <g-link :to="to" class="p-1 w-36 h-20 flex-shrink-0">
    <div class="bg-d4primary w-full h-full rounded-lg p-2 flex items-end">
      <h1 class="text-white leading-tight text-lg font-bold content-end">{{ title }}</h1>
    </div>
  </g-link>
</template>

<script>
export default {
  name: 'CardSimple',
  props: {
    // faker.lorem.title
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>

