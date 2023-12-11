import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-main': 'radial-gradient(99.61% 63.08% at 57.38% 63.24%, #EFECFF 10.31%, #F7F4FF 100%)',
        'dark-gradient-main': 'radial-gradient(60.85% 33.45% at 27.98% 73.69%, #240D2C 0%, rgba(65, 25, 79, 0.76) 0%, rgba(36, 13, 44, 0.92) 57.58%, #240D2C 100%)',
        'dark-gradient-title': 'linear-gradient(269deg, #E5C3FF 3.95%, rgba(246, 243, 255, 0.92) 57.12%)',
        'gradient-title': 'linear-gradient(269deg, #686EFF 3.95%, rgba(121, 94, 198, 0.92) 57.12%)',
        'gradient-card-primary': 'linear-gradient(167deg, #DED9FF -1.03%, #DBD5FF -1.02%, #FDE4FC 116.59%)',
        'dark-gradient-card-primary': 'linear-gradient(161deg, #DADFFF 42.53%, rgba(228, 231, 253, 0.69) 97.1%)',
        'gradient-card-secondary': 'linear-gradient(160deg, #E7E2FF 15.89%, #F6F4FF 99.66%)',
        'dark-gradient-card-secondary': 'linear-gradient(160deg, rgba(42, 17, 51, 0.87) 15.89%, #393B4E 99.66%)',
        'dark-card-border-primary': 'linear-gradient(160deg, #8888B6 15.89%, #2D1536 99.66%)',
        'card-border-primary': 'linear-gradient(156deg, #B795FF 13.18%, #F7DDFF 102.95%)',
        'dark-card-border-secondary': 'linear-gradient(157deg, #AAB1E4 14.49%, #240D2C 99.04%)',
        'card-border-secondary': 'linear-gradient(345deg, #D8C6FF 4.6%, #8654BA 80.6%)',
      },
      width: {
        'border-card': 'calc(100% + 2px)',
      },
      height: {
        'border-card': 'calc(100% + 2px)',
      },
      translate: {
        '-border-card': '-1px'
      }
    },
  },
  plugins: [],
}
export default config
