import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0px 5px 0px 0px #191A23',
      },
      colors: {
        'green-color': '#B9FF66',
        'dark-color': '#191A23',
        'gray-secondary-color': '#292A32',
        'gray-color': '#F3F3F3',
        'white-color': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      height: {
        'fit-content': 'fit-content',
      },
      width: {
        'fit-content': 'fit-content',
      },
    },
  },
  plugins: [],
}
