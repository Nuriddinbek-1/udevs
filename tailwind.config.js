/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1B5BF7",
        "custom-grey": "#464359",
        "custom-green": "#F4F7FF",
      },
      borderRadius: {
        "custom-r": "7px"
      }
    },
  },
  plugins: [],
};
