<template>
  <li class="-mb-px mr-1">
    <button
      class="inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
      :class="[active && 'bg-white text-blue-600 border-l border-t border-r rounded-t']" @click="$emit('change', 'clicked')"><slot></slot></button>
  </li>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean
    }
  }
}
</script>