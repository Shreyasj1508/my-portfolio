/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2xl-mx': {'max': '1535px'},
      'xl-mx': {'max': '1280px'},
      'lg-mx': {'max': '1024px'},
      'md-mx': {'max': '768px'},
      'sm-mx': {'max': '640px'},
      'xs-mx': {'max': '470px'},
    },
    colors: {
      bgColor: "#112240",
      primaryColor: "#64FFDA",
      textColor: "#8892B0",
    },
  },
  plugins: [],
};
