/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      spacing: {
        'benner': '800px',
        'icon':'25px',
      },
      colors:{
        'theme':'#C86FFF',
        'form-bg':'rgba(0,0,0,0.3)',
        'footer-iconbg':'rgba(128, 136, 255, 0.1)',
      },
      fontFamily: {
        'josefin': 'Josefin Sans',
      },
    },
  },
  plugins: [],
}

