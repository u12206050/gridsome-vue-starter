// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// Import global styles
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('i-frame', {
    render(h) {
      return  h('iframe', {
        on: { load: this.renderChildren }
      })
    },
    beforeUpdate() {
      //freezing to prevent unnessessary Reactifiation of vNodes
      if (this.iApp)
        this.iApp.children = Object.freeze(this.$slots.default)
    },
    methods: {
      renderChildren() {
        const children = this.$slots.default
        const { contentDocument: { body, head }, parentElement: { ownerDocument } } = this.$el

        const parentStyles = ownerDocument.head.querySelectorAll('style')
        parentStyles.forEach(style => {
          head.appendChild(style.cloneNode(true))
        })

        const el = document.createElement('DIV') // we will mount or nested app to this element
        body.appendChild(el)

        const iApp = new Vue({
          name: 'iApp',
          //freezing to prevent unnessessary Reactifiation of vNodes
          data: { children: Object.freeze(children) },
          render(h) {
            return h('div', this.children)
          },
        })

        iApp.$mount(el) // mount into iframe

        this.iApp = iApp // cache instance for later updates
      }
    }
  })
}
