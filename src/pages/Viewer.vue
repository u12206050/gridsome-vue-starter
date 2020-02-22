<template>
  <Layout v-slot="{ prop }">
    <iframe class="h-full mx-auto max-w-full overflow-scroll" :class="classList" ref="viewer" :key="getKey(prop)" :src="prop ? prop.path : '/'"></iframe>
  </Layout>
</template>

<script>
let V;
let connected = false;
function connect(el) {
  if (!connected && el.contentWindow) {
    el.contentWindow.postMessage('ping', window.location.origin);
    setTimeout(connect, 100, el)
  }
}
function handleMessage(e) {
  if (V && e.origin === window.location.origin && e.data) {
    connected = true
    V.$set(V, 'classList', e.data)
  }
}

export default {
  data() {
    return {
      classList: 'w-full',
      el: null,
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', handleMessage);
  },
  methods: {
    getKey(prop) {
      if (prop) {
        this.$nextTick(() => this.attachToViewer())
        return prop.id
      }
      return 'default'
    },
    attachToViewer() {
      if (typeof window !== 'undefined') {
        V = this;
        if (V.$refs.viewer) {
          connected = false;
          connect(V.$refs.viewer)
          window.removeEventListener('message', handleMessage);
          window.addEventListener('message', handleMessage, false);
        }
      }
    }
  },
}
</script>