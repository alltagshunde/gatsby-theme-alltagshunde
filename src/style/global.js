import { css } from '@emotion/core';

const globalCss = theme => css`
    html, body {
        margin: 0;
        padding: 0;
        border: 0;
    }
    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    body {
        font-family: ${theme.fonts.body};
        font-weight: ${theme.fontWeights.body};
        line-height: ${theme.lineHeights.body};
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.fonts.heading};
        font-weight: ${theme.fontWeights.heading};
        line-height: ${theme.lineHeights.heading};
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    ul li::before {
        content: '>';
        color: ${theme.colors.primary}; 
        font-weight: bold; 
        display: inline-block; 
        width: 1.5em; 
        margin-left: -1.5em; 
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        text-decoration: none;
        color: ${theme.colors.primary}
    }
`;

export default globalCss;
