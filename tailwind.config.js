module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
