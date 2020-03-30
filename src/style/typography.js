import Typography from "typography"

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Source Sans Pro', 'sans-serif'],
    bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
    googleFonts: [
        {
            name: 'Source Sans Pro',
            styles: [
                '400',
                '700',
            ],
        },
    ]
})

export const { scale, rhythm, options } = typography
export default typography
