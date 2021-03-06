module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': 'green',
        'text-color': 'blue',
        'test-color': 'red',
        'mysqr-light': '#FDF8F4',
        'mysqr-main': '#ff6501',
        'mysqr-semi-light': '#FAE6D6',
        'mysqr-dark-dark': '#0C1D37',
        'mysqr-gray': '#D4D2D4',
        'citon-main-dark': '',
        'citon-main-light': '',
        'stranerd-main': '#546DD3',
        'stranerd-dark-dark': '#132740',
        'stranerd-gray': '#76818E',
        'fiverr-main': '#19A463',
        'fiverr-dark-dark': '#132740',
        'fiverr-gray': '#76818E',
        'jco-main': '#19A463',
        'jco-dark-dark': '#132740',
        'jco-gray': '#76818E',
      },
      animation: { 'spin-slow': 'spin 10s linear infinite' },

      gridTemplateColumns: {
        // Simple 16 column grid
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
