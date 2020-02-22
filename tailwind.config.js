module.exports = {
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',// => @media (min-width: 640px) { ... }
      'md': '768px',// => @media (min-width: 768px) { ... }
      'lg': '1024px',// => @media (min-width: 1024px) { ... }
      'xl': '1366px',// => @media (min-width: 1366px) { ... }

      'msm': {'max': '639px'},// => @media (max-width: 639px) { ... }
      'mmd': {'max': '767px'},// => @media (max-width: 767px) { ... }
      'mlg': {'max': '1023px'},// => @media (max-width: 1023px) { ... }
      'mxl': {'max': '1365'}// => @media (max-width: 1365) { ... }
    },
    fontFamily: {
      sans: ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      serif: ['Merriweather', '-apple-system', 'BlinkMacSystemFont', 'serif'],
      mono: ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'tiny': '.5rem'
      },
      spacing: {
        'wide': '56.25%',
        'square': '100%',
        'tall': '133%'
      },
      borderRadius: {
        'xl': '1rem',
        '25': '25%'
      },
      width: {
        'mobile': '380px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1366px',
        'content': 'max-content',
        '14': '3.5rem',
        '28': '7rem',
        '36': '9rem'
      },
      height: {
        'mobile': '674px',
        'tablet': '1024px',
        'laptop': '768px',
        '1': '1px',
        '14': '3.5rem',
        '28': '7rem',
        '120': '30rem'
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
        'd4black-50': 'var(--black-50)',
        'd4white-50': 'var(--white-50)',
        'd4red': 'var(--red)',
        'd4green': 'var(--green)',
        'd4athens': 'var(--athens)',
        'facebook': 'var(--facebook)'
      },
      maxWidth: {
        'mobile': '380px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1366px'
      },
      zIndex: {
        'minus': '-1'
      },
      inset: {
        '2': '.5rem'
      }
    }
  },
  variants: {
    fill: ['hover', 'focus'],
    borderWidth: ['responsive', 'last', 'focus']
  },
  corePlugins: {
    outline: false
  }
}