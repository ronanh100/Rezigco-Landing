/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "background-line": "background-line 6s ease-in-out infinite",
        "background-line-reverse": "background-line-reverse 6s ease-in-out infinite",
      },
      keyframes: {
        "background-line": {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" },
        },
        "background-line-reverse": {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-100%)" },
        },
      },
      backgroundImage: {
        'dot-thick-neutral-300': 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        'dot-thick-neutral-800': 'radial-gradient(circle, #1f2937 1px, transparent 1px)',
        'dot-thick-purple-500': 'radial-gradient(circle, #922ea4 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-pattern': '24px 24px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.no-visible-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}; 