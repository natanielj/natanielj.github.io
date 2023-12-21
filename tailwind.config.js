import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      white: "#DFE7EE",
      midnight: "#001F3D",
      redAccent: "#753E44",
    },
    fontFamily: {
      sans: ["Inter var", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
});
