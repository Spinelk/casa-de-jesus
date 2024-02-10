/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
        colors: {
            "azul-milagro": "#02366f",
        },
        fontFamily: {
            cinzel: ["Cinzel"],
            monserrat: ["Montserrat"],
            lato: ["Lato"],
            poppins: ["Poppins"],
        },
    },
    plugins: [require("flowbite/plugin")],
};
