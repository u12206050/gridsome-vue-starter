<template>
  <div class="card rounded shadow p-3" :class="{'p-1': narrow}">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    narrow: {
      type: Boolean
    }
  }
}
</script>