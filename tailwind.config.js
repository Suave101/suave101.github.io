/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./*.{html,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["aqua"],
  },
}

