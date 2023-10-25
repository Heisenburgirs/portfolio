import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle farthest-side at 50% 50%, #000000 0%, #020202 100%)',
      },
      colors: {
        'background': '#020202',
        'dark-off-black': '#1A1A1A',
        'light-gray': '#B0B0B0',
        'wood-brown': '#8A4818',
        'speedometer-red': '#E95239',
        'soft-blue': '#E0E9F6',
        'white': '#FDFDFD',
      },
      borderRadius: {
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
      },
      fontFamily: {
        'din': ['DIN', 'sans-serif'],
        'librebodoni': ['LibreBodoniv2002', 'serif']
      },
    },
  },
  plugins: [],
}
export default config
