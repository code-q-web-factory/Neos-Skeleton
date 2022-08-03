/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{fusion,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('postcss-import'),
        require('@tailwindcss/typography'),
    ],
}
