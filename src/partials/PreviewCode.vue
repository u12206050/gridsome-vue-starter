<template>
  <pre class="bg-gray-900 text-yellow-400 text-xs my-6 p-3">
&lt;{{tag}}{{propsHtml}}&gt;{{slotsHtml}}
&lt;/{{tag}}&gt;
  </pre>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    props: {
      type: Object
    },
    slots: {
      type: Array
    }
  },
  computed: {
    propsHtml() {
      let html = ''
      const { props } = this
      const pKeys = Object.keys(props)
      if (pKeys && pKeys.length) {
        html += ' '
        html += pKeys.map(k => {
          let s = k === 'value' ? `v-model="abc"` : `${k}="${props[k]}"`
          if (s.length > 50) s = s.substr(0,48) + '..."'
          return s
        }).join('\n  ')
        html += ' '
      }
      return html
    },
    slotsHtml() {
      let html = ''
      const { slots } = this
      if (slots && slots.length) {
        html += '\n  '
        html += slots.map(({ name }) => `<template v-slot:${name}>\n    <div>Some ${name} content here…</div>\n  </template>`).join('\n  ')
      }
      return html
    }
  }
}
</script>