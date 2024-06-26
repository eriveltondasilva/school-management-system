import forms from '@tailwindcss/forms'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],

  darkMode: 'class',

  theme: {
    screens: {
      xs: '390px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        danger: colors.red,
        primary: colors.blue,
        secondary: colors.gray,
        success: colors.green,
        warning: colors.yellow,
        background: colors.slate,
      },

      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [forms, require('flowbite/plugin')],
}
