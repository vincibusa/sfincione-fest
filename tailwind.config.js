/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosso-mattone': '#B22222',
        'giallo-ocra': '#FFD700',
        'verde-salvia': '#6B8E23',
        'beige-chiaro': '#F5F5DC',
        // Colori estratti dall'immagine
        'bianco': '#FFFFFF',
        'nero': '#000000',
        'rosso-salsa': '#CC3333',
        'marroncino': '#F2C26B',
      },
      fontFamily: {
        'gotham': ['Montserrat', 'sans-serif'],
        'sunshine': ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/api/placeholder/1920/1080')",
        'event-pattern': "url('/api/placeholder/100/100')",
      }
    },
  },
  plugins: [],
}