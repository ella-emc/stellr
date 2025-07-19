/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./SignIn.tsx"
  ],
  presets: [
    require('nativewind/preset'),
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F1E",
        primary: "#2E86AB",
        primaryLight: "#67B6DD",
        accent: "#F25287",
        text: "#d2d2d2ff",
        backgroundDark: "#1E1F2D",
        backgroundLight: "#353545",
      },
      fontFamily: {
        sora: ['Sora'],
        'sora-bold': ['Sora Bold'],
        'sora-semi-bold': ['Sora SemiBold'],
        'dm-sans': ['DM Sans' ],
        'dm-sans-bold': ['DM Sans Bold'],
        'dm-sans-semibold': ['DM Sans SemiBold'],
      }
    },
  },
  plugins: [],
}

