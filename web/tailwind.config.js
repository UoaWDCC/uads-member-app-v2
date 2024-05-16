import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [daisyui,
    require('@tailwindcss/line-clamp'),
  ],
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
        'brown': '#5F4444',
        'yellow': '#FCBA04',
        'light-brown': '#422924',
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
