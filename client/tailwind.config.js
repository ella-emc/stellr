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
        text: "#E1E1E1",
        backgroundDark: "#1E1F2D",
        backgroundLight: "#353545",
      },
      fontFamily: {
        sora: ['Sora'],
        soraBold: ['Sora Bold'],
        'sora-semibold': ['Sora SemiBold'],
        dmSans: ['DM Sans'],
        'dm-sans-bold': ['DM Sans Bold'],
        'dm-sans-semi-bold': ['DM Sans SemiBold'],
      }
    },
  },
  plugins: [],
}

