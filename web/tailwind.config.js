import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [daisyui],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
        body: ['Open Sans'],
        raleway: ['Raleway']
      },
      colors: {
        'light-pink': '#E6C3BE',
        'pink': '#B04F61',
        'gray': '#3D3F4B',
        'brown': '#472A25',
        'yellow': '#FCBA04'
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...themes['light'],
          accent: '#087df1',
        },
        dark: {
          ...themes['dark'],
          accent: '#087df1',
        },
      },
    ],
  },
};
