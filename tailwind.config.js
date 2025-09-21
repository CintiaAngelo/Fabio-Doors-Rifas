/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores da paleta original
        'black-dark': '#0B090A',
        'black-medium': '#1A1A1D',
        'red-dark': '#660708',
        'red-medium': '#A4161A',
        'red-light': '#BA181B',
        'red-accent': '#E5383B',
        'gray-light': '#b3b7b6ff',
        'gray-medium': '#D3D3D3',
        'off-white': '#F5F3F4',
        'white-pure': '#FFFFFF',

        // Mapeamento para um design mais profissional e fiel
        'main-bg': '#F5F3F4',
        'main-text': '#0B090A',
        'navbar-bg': '#1A1A1D',
        'navbar-text': '#F5F3F4',
        'accent-red': '#E5383B',
        'accent-dark-red': '#A4161A',
        'card-bg': '#FFFFFF',
        'border-color': '#b4b4b4ff',
        'testimonial-bg': '#c0c3c3ff', // Cor para o fundo do depoimento, baseada na imagem
        'testimonial-text': '#0B090A', // Cor do texto do depoimento
      },
    },
  },
  plugins: [],
}