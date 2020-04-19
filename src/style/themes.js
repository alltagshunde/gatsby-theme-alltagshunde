import preset from '@rebass/preset'
import color from 'color'

const base = {
    ...preset,
    colors: {
        taupe: '#444331',
        zinnwalditeBrown: '#201900',
        zinnwalditeBrown2: '#241C00',//rgb(36,28,0)
        licorice: '#1C1600',
        citron: '#8ab31d',
        maximumGreen: '#5aa02c',
        white: '#ffffff',
        ivory: '#FCFFEB',
        babyPowder: '#FEFFF9',
        // greyish
        nickel: '#74776B',
        pastelGrey: '#CCCDC9',
        platinum: '#eeedec',
        mutedInverse: 'rgba(36,28,0,0.5)',
        muted: 'rgba(255,255,255,0.5)',
        // orangish
        sunsetOrange: '#EB5E55',
        vermilion: '#E03616',
        portlandOrange: '#F46036',
        // brownish
        wenge: '#695958',
    },
    fonts: {
        ...preset.fonts,
        body: 'Roboto, system-ui, sans-serif',
    },
    breakpoints: [
        '720px', '1280px', '1600px',
    ],
    variants: {
        ...preset.variants,
        avatar: {
            size: [48, 64, 96],
            borderRadius: 'circle',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'background',
            bg: 'primary',
            fontSize: [4, 5, 6],
        },
        container: {
            // maxWidth: ['540px', '688px', '1152px', '1664px'],
            // mx: 'auto',
            px: [4, 5, 6],
            flexGrow: 1,
        },
        link: {
            color: 'inherit',
            ':hover,:focus,.active': {
                color: 'primary',
            }
        }
    },
    logo: {
        image: '/icons/logo-image-alt.svg',
        text: '/icons/logo-text.svg',
    },
}

const themes = {
    dark: {
        ...base,
        colors: {
            ...base.colors,
            primary: base.colors.maximumGreen,
            secondary: base.colors.zinnwalditeBrown2,
            primaryMuted: color(base.colors.maximumGreen).fade(0.3).string(),
            primaryMuted2: color(base.colors.maximumGreen).fade(0.8).string(),
            secondaryMuted: color(base.colors.zinnwalditeBrown2).fade(0.3).string(),// nearly umber #5F5945
            secondaryMuted2: color(base.colors.zinnwalditeBrown2).fade(0.8).string(),// nearly umber #5F5945
            background: base.colors.white,
            text: base.colors.zinnwalditeBrown2,
        },
        logo: {
            ...base.logo,
            text: '/icons/logo-text-light-alt.svg',
        },
        forms: {
            input: {
                my: [1, 1, 1],
                color: 'secondary',
                bg: 'background',
                outline: 'none',
                border: 'none',
                fontFamily: base.fonts.body,
                '&:focus': {
                    boxShadow: `0 0 0 2px ${base.colors.maximumGreen}`,
                },
                '&::placeholder': {
                    color: color(base.colors.zinnwalditeBrown2).fade(0.75).string(),
                }
            },
            select: {
            },
            textarea: {
                my: [1, 1, 1],
                color: 'secondary',
                bg: 'background',
                outline: 'none',
                border: 'none',
                fontFamily: base.fonts.body,
                '&:focus': {
                    boxShadow: `0 0 0 2px ${base.colors.maximumGreen}`,
                },
                '&::placeholder': {
                    color: color(base.colors.zinnwalditeBrown2).fade(0.75).string(),
                }
            },
            label: {},
            radio: {},
            checkbox: {},
        },
    },
    light: {
        ...base,
        colors: {
            ...base.colors,
            primary: base.colors.platinum,
            secondary: base.colors.citron,
            background: base.colors.white,
            text: base.colors.taupe,
        }
    },
    green: {
        ...base,
        colors: {
            ...base.colors,
            primary: base.colors.citron,
            secondary: base.colors.taupe,
            background: base.colors.white,
        },
        logo: {
            ...base.logo,
            text: '/icons/logo-text-dark.svg',
        }
    }
}

export default themes
