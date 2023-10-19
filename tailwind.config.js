/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes:{
        errorAnime:{
          'from':{
            top:'[-300px]',
            opacity:'0',
          },
          'to':{
            top:'[50%]',
            opacity:'100'
          },
        },
        toggleAnime:{
          'from':{
            justifyContain:'start',
          },
          'to':{
            justifyContain:'end',
          },
        }
      },
      animation:{
        errorAnime:'errorAnime 5s ease-in-out',
        toggleAnime:'toggleAnime 10s linear forwards',
      }
    },
    
  },
  plugins: [],
}

