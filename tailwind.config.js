module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode using the `class` strategy
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',
          dark: '#1E40AF',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#6B7280',
          dark: '#4B5563',
          light: '#9CA3AF',
        },
        ghost: {
          DEFAULT: 'transparent',
          dark: '#E5E7EB',
          light: '#F3F4F6',
        },
        dark: {
          background: '#1A202C',
          text: '#CBD5E0',
        },
        light: {
          background: '#FFFFFF',
          text: '#1A202C',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
