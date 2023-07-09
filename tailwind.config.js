/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand_background: "#F8FCFF",
        brand_orange: "#FDAF01",
        brand_blue: "#A7E1F5",
        brand_green_soft: "#70D096",
        brand_red: "#FB4F6E",
        brand_green: "#008D43",
        brand_blue2: "#A5E1F9",
        brand_red2: "#EE5B6E",
        dark_background: "#252525",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  plugins: [require("daisyui")],
}
