import { useTheme } from 'emotion-theming'
import { css } from '@emotion/core'

function useColor(color) {
    const theme = useTheme()

    const colorCss = css`
        color: ${theme.colors[color]};
    `

    return colorCss;
}

export default useColor;
