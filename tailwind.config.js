/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '680px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }
      '2xl':'1600px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'orbitron': ['Orbitron', 'sans-serif'],
      'noto':['Noto Sans', 'sans-serif'],
      "poiret-one":['Poiret One', 'cursive'],
      "roboto":["Roboto", "sans-serif"],
      "alegreya":['Alegreya Sans', 'sans-serif']
    }, 
    extend: {
      backgroundImage: {
        'member-1':"url('../public/img/template-10/member1.jpg')",
        'member-2':"url('../public/img/template-10/member2.jpg')",
        'member-3':"url('../public/img/template-10/member3.jpg')",
        'robot':"url('../public/img/template-10/robot.png')",
        'member1':"url('../public/img/template-12/member1.jpg')",
        'member2':"url('../public/img/template-12/member2.jpg')",
        'member3':"url('../public/img/template-12/member3.jpg')",
        'member4':"url('../public/img/template-12/member4.jpg')",
        'member5':"url('../public/img/template-12/member5.jpg')",
        'member6':"url('../public/img/template-12/member6.jpg')",
        'member7':"url('../public/img/template-12/member7.jpg')",
        'member8':"url('../public/img/template-12/member8.jpg')",
      },
      animation: {
        rotation: "rotation linear 20s infinite",
        sky: "sky linear 20s infinite",
        sun: "sun linear 20s infinite",
        day: "day linear 20s infinite",
        cloud1: "flow linear 10s infinite",
        flow: "flow linear 20s infinite",
        man: "flow linear 7s infinite",
        rotationY: "rotationY linear 30s infinite",
        shadowRotation: "shadowRotation linear 4s infinite",
        discRotation: "rotation linear 4s infinite",
      },
      keyframes: {
        shadowRotation: {
          '0%': {transform: 'translateY(10%) rotate(0deg)'},
          '100%': {transform: 'translateY(10%) rotate(360deg)'}
        },
        rotation: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'}
        },
        rotationY: {
          '0%': {transform: 'rotateY(0deg)'},
          '100%': {transform: 'rotateY(360deg)'}
        },
        sky : {
          '0%': {"background-color": "#b08fcc"},
          '25%': {"background-color": "#b1e1e2"},
          '50%': {"background-color": "#fcd2e2"},
          '75%': {"background-color": "#636888"},
          '100%': {"background-color": "#b08fcc"},
        },
        sun : {
          '0%': {opacity: 0, transform: "rotate(-90deg)"},
          '25%': {opacity: 1, transform: "rotate(-30deg)"},
          '50%': {opacity: 1, transform: "rotate(30deg)"},
          '75%': {opacity: 0, transform: "rotate(90deg)"},
          '100%': {opacity: 0, transform: "rotate(-90deg)"},
        },
        day : {
          '0%': {opacity: 0},
          '25%': {opacity: 1},
          '50%': {opacity: 1},
          '75%': {opacity: 0},
          '100%': {opacity: 0},
        },
        flow : {
          '0%': {left: "0%",opacity: 0},
          '15%': {opacity: 1},
          '80%': {opacity: 1},
          '100%': {left: "90%",opacity: 0},
        },
      }
    },
  },
  plugins: [
    require("@kamona/tailwindcss-perspective"),
    require('tailwindcss-labeled-groups')(['face1', "face2", "face3", "face4", "face4-2", "face5", "face6", "face8"]),
  ],
}
