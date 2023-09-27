import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-fira)'],
      mono: ['var(--font-roboto-mono)'],
    },
    extend: {
      screens: {
        sausage: { raw: '(pointer: coarse)' }, // Touch devices
      },
      animation: {
        blink: 'blink 2s steps(1) infinite;',
      },
      keyframes: {
        blink: {
          '50%': { color: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
