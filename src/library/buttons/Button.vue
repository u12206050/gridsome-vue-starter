<template>
  <button class="py-2 px-4 font-semibold hover:shadow-none"
    style="transition: .3s"
    :class="[theme, {border, 'shadow-lg': shadow, 'rounded-lg': rounded}]"
    @click="click">{{label}}</button>
</template>

<script>
export default {
  props: {
    label: String,
    shadow: Boolean,
    rounded: Boolean,
    border: Boolean,
    color: {
      // options: gray,red,orange,yellow,green,teal,blue,indigo,purple,pink
      type: String,
      default: 'gray'
    }
  },
  computed: {
    theme() {
      const { color } = this
      return `text-${color}-600 bg-${color}-100 hover:bg-${color}-600 hover:text-${color}-100`
    }
  },
  methods: {
    // @vuese
    // Fired when button is clicked
    click () {
      this.$emit('click')
    }
  }
}
</script>