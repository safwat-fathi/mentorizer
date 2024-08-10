import type { Config } from "tailwindcss";

import daisyui from "daisyui";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./lib/components/**/*.{ts,tsx}", "./app/[locale]/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        messiri: ["var(--font-messiri)"],
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  daisyui: {
    themes: ["light", "night"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [daisyui, forms({ strategy: "class" }), typography],
};
export default config;
