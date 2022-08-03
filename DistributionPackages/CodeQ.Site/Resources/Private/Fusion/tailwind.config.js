/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{fusion,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
