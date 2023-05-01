const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

function getFontSettings() {
    return {
        lineHeight: '1.45',
        letterSpacing: defaultTheme.letterSpacing.normal,
    };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['Resources/Private/Fusion/**/*.{fusion,js,ts}', 'NodeTypes/**/*.{fusion,js,ts}'],
    theme: {
        extend: {
            colors: {
                'body-text': 'rgb(var(--color-body-text)) / <alpha-value>)',
                'primary': 'rgb(var(--color-primary) / <alpha-value>)',
                'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
            },
            /*
            fontFamily: {
                sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
            },
            */
            fontSize: {
                'base': ['1rem', getFontSettings()],
                'lg': ['1.4rem', getFontSettings()],
                'xl': ['1.66rem', getFontSettings()],
                '2xl': ['2rem', getFontSettings()],
                '3xl': ['2.33rem', getFontSettings()],
                '4xl': ['2.66rem', getFontSettings()],
                '5xl': ['3rem', getFontSettings()],
                '6xl': ['3.75rem', getFontSettings()],
            },
            maxWidth: {
                'medium': '51.56rem',
                'large': '73.375rem',
            },
            ringColor: {
                DEFAULT: 'rgb(var(--color-primary))',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        plugin(({ addVariant, addUtilities }) => {
            // Add not empty variants
            addVariant('not-empty', ['&:not(:empty)']);
            addVariant('group-not-empty', ['.group:not(:empty) ~ &']);
            addVariant('peer-not-empty', ['.peer:not(:empty) ~ &']);

            // Add hover and focus combi
            addVariant('hocus', ['&:hover', '&:focus']);
            addVariant('group-hocus', ['.group:hover &', '.group:focus &']);
            addVariant('peer-hocus', ['.peer:hover ~ &', '.peer:focus ~ &']);

            // Add combi hover and focus-within
            addVariant('hocus-within', ['&:hover', '&:focus-within']);
            addVariant('group-hocus-within', ['.group:hover &', '.group:focus-within &']);
            addVariant('peer-hocus-within', ['.peer:hover ~ &', '.peer:focus-within ~ &']);

            // Add children variant
            addVariant('children', '& > *');
            addVariant('below', '& *');
            addVariant('last-child', '& > *:last-child');

            // Support variants
            addVariant(
                'supports-backdrop-blur',
                '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
            );

            addUtilities({
                '.hide-scrollbar': {
                    '-ms-overflow-style': 'none', // for Internet Explorer, Edge
                    'scrollbar-width': 'none', // for Firefox
                    '&::-webkit-scrollbar': {
                        display: 'none', // for Chrome, Safari, and Opera
                    },
                },
            });
        }),
    ],
};
