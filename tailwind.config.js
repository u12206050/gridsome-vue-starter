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
      borderRadius: {
        'xl': '1rem',
        '25': '25%'
      },
      width: {
        'mobile': '380px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',

        '36': '9rem'
      },
      colors: {
        'd4primary': 'var(--primary)',
        'd4secondary': 'var(--secondary)',
        'd4slate-lighter': 'var(--slate-lighter)',
        'd4slate-light': 'var(--slate-light)',
        'd4slate': 'var(--slate)',
        'd4slate-dark': 'var(--slate-dark)',
        'd4gray-light': 'var(--gray-light)',
        'd4gray': 'var(--gray)',
        'd4gray-dark': 'var(--gray-dark)',
        'd4white': 'var(--white)',
        'd4black': 'var(--black)',
        'd4red': 'var(--red)',
        'd4green': 'var(--green)'
      }
    }
  },
  variants: {
    fill: ['hover', 'focus'],
    borderWidth: ['responsive', 'focus']
  },
  corePlugins: {
    outline: false
  },
  plugins: []
}