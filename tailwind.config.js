/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg-hero-descktop": "url('./assets/bg-hero-descktop2.webp')",
        "custom-bg-hero-mobile": "url('./assets/bg-hero-mobile2.webp')",
        "custom-bg-two-descktop": "url('./assets/bg-two-descktop.webp')",
        "custom-bg-two-mobile": "url('./assets/bg-two-mobile.webp')",
        "custom-bg-tree-descktop": "url('./assets/bg-tree-descktop.webp')",
        "custom-bg-tree-mobile": "url('./assets/bg-tree-mobile.webp')",
        "custom-bg-for-descktop": "url('./assets/bg-for-descktop.webp')",
        "custom-bg-for-mobile": "url('./assets/bg-for-mobile.webp')",
        "custom-bg-five-descktop": "url('./assets/bg-five-descktop.webp')",
        "custom-bg-five-mobile": "url('./assets/bg-five-mobile.webp')",
        "custom-bg-six-descktop": "url('./assets/bg-six-descktop.webp')",
        "custom-bg-six-mobile": "url('./assets/bg-six-mobile.webp')",
        "custom-bg-seven-descktop": "url('./assets/bg-seven-descktop.webp')",
        "custom-bg-seven-mobile": "url('./assets/bg-seven-mobile.webp')",
        "custom-bg-eight-descktop": "url('./assets/bg-eight-descktop.webp')",
        "custom-bg-eight-mobile": "url('./assets/bg-eight-mobile.webp')",
        "custom-bg-nine-descktop": "url('./assets/bg-nine-descktop.webp')",
        "custom-bg-nine-mobile": "url('./assets/bg-nine-mobile.webp')",

        "custom-bg-footer-descktop": "url('./assets/bg-footer-descktop.webp')",
        "custom-bg-footer-mobile": "url('./assets/bg-footer-mobile.webp')",

        "custom-icon-seta-esquerda": "url('./assets/seta-esquerda.svg')",
        "custom-icon-seta-direita": "url('./assets/seta-direita.svg')",

        "custom-icon-seta": "url('assets/seta.svg')",

        "custom-icon-whatssap": "url('./assets/icone-whatszapp-amarelo.svg')",

        "custom-bg-container-two":
          "linear-gradient(to left, #000 0%, #94711F 50%, #000 100%);",
        "bg-degrade-button-hero": "linear-gradient(to left, #EBCF7F, #C39157)",
        "custom-bg-degrade-sec-eigth-yellow":
          "linear-gradient(to left, #000000, #ECB531)",
        "custom-bg-degrade-sec-eigth-black":
          "linear-gradient(to left, #000000, #2C2626)",
        "custom-icon-button": "url('./assets/icone-whatsapp-branco.svg')",
      },

      colors: {
        "bg-degrade-button-hero": "linear-gradient(to left, #EBCF7F, #C39157)",
      },

      screens: {
        "3xl": "1940px",
      },
    },
  },
  plugins: [],
};
