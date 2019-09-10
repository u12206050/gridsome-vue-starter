<template>
  <p v-if="type == 'Boolean'">
    <input
      class="w-4 h-4"
      type="checkbox"
      :checked="!!value"
      :value="true"
      v-on:input="$emit('input', $event.target.checked)"
      :required="required">
      {{value}}
  </p>
  <select v-else-if="options" :value="value" v-on:input="$emit('input', $event.target.value)"
    class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-600">
    <option v-for="opt in options" :key="opt" :value="opt">{{opt}}</option>
  </select>
  <input v-else
    class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-600"
    :type="type == 'Number' ? 'number' : 'text'"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :required="required">
</template>

<script>
export default {
  props: ['type', 'typeDesc', 'value', 'required', 'placeholder'],
  computed: {
    options() {
      const { typeDesc } = this
      if (typeDesc && typeDesc.length) {
        let opts = (typeDesc.pop()).split('options:')
        if (opts && opts.length == 2) {
          opts = ((opts.pop()).trim()).split(',')
          console.log(opts)
          return opts.length > 1 ? opts : false
        }
      }
      return false
    }
  }
}
</script>