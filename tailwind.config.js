/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        changeBg: { 
          '0%, 40%': { backgroundImage: 'url("../src/Components/Images/pic1.png")', backgroundColor:'#cccccc6b', },
          '41%':{opacity:0.4,},
          '43%, 80%': {opacity:1, backgroundImage: 'url("../src/Components/Images/creatorBg2.png")',},
          '81%':{opacity:0.4,},
          '83%, 100%': {opacity:1, backgroundImage: 'url("../src/Components/Images/creatorBg3.png")'},
        },
      },
    },
    colors:{
      'white':'#fff',
      'black':'#000',
      'red':'rgba(227, 22, 22, 1)',
      'green':'rgba(62, 160, 59, 1)',
      'grey':'rgba(146, 151, 156, 1)',
      'light-grey':'#888888',
      'grey-100':'rgba(184, 186, 188, 1)',
      'light-blue':'rgba(70, 147, 237, 1)',
      'blue':'rgba(51, 65, 193, 1)',
      'np-button-bg':'rgba(255, 255, 255, 0.2)',
      'body-bg': 'rgba(255, 255, 255, 1)',
      'header-p':'rgba(41, 41, 41, 1)',
      'main-text': 'rgba(51, 51, 51, 1)',
      'creators-p':'rgba(0, 0, 0, 0.57)',
      'creators-p-bg':'rgba(0, 0, 0, 0.04)',
      'creators-bg':'rgba(226, 226, 226, 1)',
      'auctions-text':'rgba(255, 255, 255, 1)',
      'box-bg':'rgba(244, 242, 242, 1)',
      'auc-text-bg':'rgba(245, 244, 244, 0.24)',
      'auc-creator-text':' #616161',
      'creator-two-bg':'rgba(217, 217, 217, 1)',
      'drop-text': 'rgba(97, 97, 97, 1)',
    },
  },
  plugins: [],
}
