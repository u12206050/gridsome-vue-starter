module.exports = {
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',// => @media (min-width: 640px) { ... }
      'md': '768px',// => @media (min-width: 768px) { ... }
      'lg': '1024px',// => @media (min-width: 1024px) { ... }
      'xl': '1280px',// => @media (min-width: 1280px) { ... }

      'msm': {'max': '639px'},// => @media (max-width: 639px) { ... }
      'mmd': {'max': '767px'},// => @media (max-width: 767px) { ... }
      'mlg': {'max': '1023px'},// => @media (max-width: 1023px) { ... }
      'mxl': {'max': '1279px'}// => @media (max-width: 1279px) { ... }
    },
    extend: {
      width: {
        'mobile': '380px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px'
      }
    }
  },
  variants: {},
  corePlugins: {
    outline: false
  },
  plugins: []
}