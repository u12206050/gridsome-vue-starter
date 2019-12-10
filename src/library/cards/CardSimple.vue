<template>
  <g-link :to="to">
    <div class="card-simple flex-shrink-0 rounded-lg p-2 flex items-end">
      <h1 class="text-white leading-tight text-lg font-bold content-end">{{ title }}</h1>
    </div>
  </g-link>
</template>

<script>
export default {
  name: 'CardSimple',
  props: {
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

<style lang="scss">
.card-simple {
  background: #FFAE0C;
  width: 8.5rem;
  height: 4.5rem;
}
</style>

