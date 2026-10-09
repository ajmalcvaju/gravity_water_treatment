/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#103B66',
          'navy-dark': '#0A2540',
          blue: '#087CC1',
          'blue-hover': '#076ba8',
          cyan: '#28C5D7',
          'cyan-dark': '#1ab0c1',
          'bg-light': '#F1F8FC',
          'text-dark': '#1D2D3D',
          muted: '#5A6E82',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'var(--font-plus-jakarta-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-hero': 'linear-gradient(120deg, #103B66 0%, #087CC1 55%, #28C5D7 100%)',
        'brand-hero-subtle': 'linear-gradient(135deg, rgba(16, 59, 102, 0.95) 0%, rgba(8, 124, 193, 0.9) 60%, rgba(40, 197, 215, 0.85) 100%)',
      },
    },
  },
  plugins: [],
};
