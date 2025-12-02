/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        floatUp: "floatUp 6s ease-in-out infinite",
        floatDown: "floatDown 6s ease-in-out infinite",
        floatDiagLeft: "floatDiagLeft 7s ease-in-out infinite",
        floatDiagRight: "floatDiagRight 7s ease-in-out infinite",
        floatCircle: "floatCircle 10s linear infinite",
        wobbleRotate: "wobbleRotate 8s ease-in-out infinite",
      },

      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-25px)" }
        },
        floatDown: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(25px)" }
        },
        floatDiagLeft: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-20px,-20px)" }
        },
        floatDiagRight: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(20px,-20px)" }
        },
        floatCircle: {
          "0%": { transform: "translate(0) rotate(0deg)" },
          "100%": { transform: "translate(10px,-10px) rotate(360deg)" }
        },
        wobbleRotate: {
          "0%": { transform: "rotate(0deg) translate(0,0)" },
          "50%": { transform: "rotate(10deg) translate(5px,-5px)" },
          "100%": { transform: "rotate(-10deg) translate(-5px,5px)" }
        }
      }
    },
  },
  plugins: [],
};
