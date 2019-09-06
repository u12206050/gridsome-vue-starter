<template>
  <input v-if="type == 'Boolean'"
    class="w-4 h-4"
    type="checkbox"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    :required="required">
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
  props: ['type', 'value', 'required', 'placeholder']
}
</script>