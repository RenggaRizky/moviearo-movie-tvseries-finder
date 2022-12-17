module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                darkblack: "#0F0F0F",
                lightblack: "#161616",
                primary: "#FCA311",
                secondary: "#d78703",
                lightgray: "#ADB5BD",
                divider: "#1F2937",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("tailwind-scrollbar-hide")],
};
