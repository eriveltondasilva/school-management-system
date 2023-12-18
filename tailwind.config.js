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
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        danger   : colors.red,
        primary  : colors.blue,
        secondary: colors.gray,
        success  : colors.green,
        warning  : colors.yellow,
      },

      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans
        ],
      },
    },
  },

  plugins: [forms],
}
