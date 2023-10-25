/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':"Poppins"
      },
      keyframes:{
        showErrorAnime:{
          'from':{
            top:'-15%',
            opacity:'0',
          },
          'to':{
            top:'50%',
            opacity:'100'
          },
        },
        exitErrorAnime:{
          'from':{
            top:'50%',
            opacity:'100',
          },
          'to':{
            top:'-15%',
            opacity:'0'
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
        showErrorAnime:'showErrorAnime .5s ease-in-out',
        exitErrorAnime:'exitErrorAnime .5s ease-in-out',
        toggleAnime:'toggleAnime 10s linear forwards',
      }
    },
    
  },
  plugins: [],
}

