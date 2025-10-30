/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,php}',
    // './**/*.html',
    './js/**/*.js',
    './css/**/*.css',
    './8pm-assest/**/*.{css,js}',
    '!./node_modules/**/*',
  ],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    // connect with bootstrap screen size
    screens: {
      xs: '0px', // Extra small devices (portrait phones)
      sm: '576px', // Small devices (landscape phones) - Bootstrap sm
      md: '768px', // Medium devices (tablets) - Bootstrap md
      lg: '992px', // Large devices (desktops) - Bootstrap lg
      xl: '1200px', // Extra large devices (large desktops) - Bootstrap xl
      xxl: '1400px', // Extra extra large devices - Bootstrap xxl
    },
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        alert: 'rgb(var(--color-alert) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        process: 'rgb(var(--color-process) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        'text-title': 'rgb(var(--color-text-title) / <alpha-value>)',
        'text-basic': 'rgb(var(--color-text-basic) / <alpha-value>)',
        border: 'rgb(var(--color-border-1) / <alpha-value>)',
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-2nd': 'rgb(var(--bg-2nd) / <alpha-value>)',
        'bg-3nd': 'rgb(var(--bg-3nd) / <alpha-value>)',
        'bg-opposite': 'rgb(var(--bg-opposite) / <alpha-value>)',
        price: 'rgb(var(--color-price) / <alpha-value>)',
        'price-sale': 'rgb(var(--color-price-sale) / <alpha-value>)',
      },
      spacing: {
        1: '1px',
      },
    },
    fontSize: {
      xs: '12px',
      sm: 'var(--size-small)',
      'size-sm': 'var(--size-small)',
      'size-xs': 'var(--size-small-a)',
      'size-1': 'var(--size-1)',
      'size-2': 'var(--size-2)',
      'size-3': 'var(--size-3)',
      'size-4': 'var(--size-4)',
      'size-5': 'var(--size-5)',
      'size-6': 'var(--size-6)',
      'size-7': 'var(--size-7)',
      'size-8': 'var(--size-8)',
    },
    borderRadius: {
      none: '0',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-1)',
      lg: 'var(--radius-2)',
      xl: 'var(--radius-3)',
      xxl: 'var(--radius-4)',
    },
  },
  plugins: [],
}
