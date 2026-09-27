import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F4EA', // Primary warm ivory canvas
        foreground: '#1C1B19', // Primary charcoal text
        surface: {
          DEFAULT: '#F8F4EA',   // Primary surface
          card: '#F8F4EA',      // Primary card surface
          elevated: '#F2EDE3',  // Elevated warm beige surface
          hover: '#EEE7DC',     // Card hover warm surface
          availability: '#F0E9DE', // Availability block surface
          dark: '#1C1B19',      // Dark contrast surface (Contact section)
        },
        border: {
          subtle: '#D9CFC5',
          DEFAULT: '#D9CFC5',   // Soft beige accent border
          hover: '#C06849',     // Terracotta border on hover
          dark: '#5F4B3B',      // Dark secondary border
        },
        text: {
          primary: '#1C1B19',   // Charcoal body / titles / headings
          secondary: '#8D8275', // Warm muted taupe
          muted: '#8D8275',
          dark: '#5F4B3B',      // Dark secondary
          black: '#080808',     // Pure black for high-contrast
          light: '#F8F4EA',     // Ivory on dark surfaces
        },
        accent: {
          DEFAULT: '#C06849',   // Terracotta accent
          hover: '#A9543A',     // Deeper terracotta hover
          soft: '#D9CFC5',      // Soft accent
          dark: '#5F4B3B',      // Dark secondary accent
          faint: 'rgba(192, 104, 73, 0.10)',
        },
        status: {
          available: '#6F8A65', // Muted natural green availability dot
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(95, 75, 59, 0.04)',
        'warm-md': '0 12px 40px rgba(95, 75, 59, 0.08)',
        'warm-elevated': '0 16px 48px -12px rgba(95, 75, 59, 0.12)',
        'warm-button': '0 4px 14px rgba(192, 104, 73, 0.25)',
      },
      borderRadius: {
        card: '12px',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '400ms',
      },
    },
  },
  plugins: [],
}

export default config
