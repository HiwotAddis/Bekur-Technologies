import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'scroll-up': 'scroll-up 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'pause-on-hover': {
          'from': { animationPlayState: 'paused' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

