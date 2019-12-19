// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// Import global styles
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.filter('namify', function (value) {
    if (!value) return ''
    const str = value.replace( /([A-Z])/g, " $1" )
    return str.charAt(0).toUpperCase() + str.slice(1)
  })

  // Add a meta tag
  head.meta.push({
    name: 'viewport',
    'data-key': 'viewport',
    content: 'width=device-width, viewport-fit=auto'
  })

  head.link.push({
    rel: 'prefetch',
    key: 'GoogleFonts',
    href: 'https://fonts.googleapis.com/css?family=Merriweather|Source+Sans+Pro:400,600,700&display=swap',
    onload: "this.onload=null;this.rel='stylesheet'"
  })
}
