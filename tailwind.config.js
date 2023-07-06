export default {
 content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {},
 },
 plugins: [require("daisyui")],
 daisyui: {
  themes: [
   {
    mytheme: {
     primary: "#0d6efd",
     secondary: "#f000b8",
     "base-100": "#ffffff",
     "base-200": "#f9fafb",
     "base-300": "#d1d5db",
    },
   },
  ],
 },
};
