import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta-sans': 'Plus Jakarta Sans'
      },
      colors: {
        'light-green': '#58936E',
        'freshGreen': '#AFC543',
        'lite-dark-gray': '#70737A',
        'dark-gray': '#323741',
        'dark-green': '#116530',
        'lite-gray': '#FFFAE8',
        'light-yellow': '#FFCC1D',
        'lightOrange': '#F7982D',
        'lightRed': '#E4504A',
        'blackLite': '#323741',
        'whiteButton': '#E7F0EA'
      },
      margin: {
        content: '151px',
        tablet: '75px',
        mobile: '20px'
      },
      screens: {
        mobile: '450px'
      },
      boxShadow: {
        "full": '5px 5px 15px 15px  rgb(0 0 0 / 0.05)',
        'background': '0 35px 35px rgba(159, 0 59, 1)',
      },
    },
  },
  plugins: [],
}
export default config
