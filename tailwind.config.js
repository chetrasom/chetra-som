/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: 'Inter',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      backgroundImage: {
        // 'hero-pattern': "url('./src/assets/images/my-profile.jpg')",
        'hero-pattern': "url('./assets/images/my-profile.jpg')",
        'footer-pattern': "url('./src/assets/images/footer-bg.jpg')",
      },
      animation: {
        'blob': 'blob 5s ease-in-out infinite',
      },
      // keyframes: {
      //   blob: {
      //     '0%': { 'border-redius': 'rounded-blob-1' },
      //     '50%': { 'border-redius': 'rounded-blob-2' },
      //     '100%': { 'border-redius': 'rounded-blob-3' },
      //   }
      // }
    },
  },
  plugins: [],
}

