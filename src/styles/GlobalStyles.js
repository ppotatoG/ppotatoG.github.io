import { createGlobalStyle } from "styled-components"
import "normalize.css"

const GlobalStyles = createGlobalStyle`
:root {
    font-size: 14px;
    --dark: #222;
    --grey: #7c7c7c;
    --highlight: #fa7481;
    --highlight-pink: #fff6f7;
}

* {
    box-sizing: border-box;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

ol {
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
    li {
       margin: .4em;
    }
}

body {
    color: var(--dark);
    font-family: Heebo, Arial, Helvetica, 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 150px 0 0 0;
    font-size: 1.2rem;
    line-height: 1.4;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: var(--highlight);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--dark);
        border-radius: 0;
    }
}

.gatsby-resp-image-wrapper {
    max-width: 800px!important;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    margin-left: 0 !important;
}

.btn {
    color: var(--highlight);
    font-weight: 700;
    margin-top: 1.25rem;
    font-size: 1.2rem;
    letter-spacing: -0.5px;
    text-decoration: none;
    text-transform: capitalize;
}

main {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 30px;
}

hr {
    &.separator {
        height: 3px;
        border: none;
        background-color: #000;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;

        &.separator__large {
        height: 6px;
        }
    }
}

blockquote {
    background: var(--highlight-pink);
    border-left: 10px solid #fa7481;
    margin: 1.5em 10px;
    padding: 1em 10px .1em 10px;
    quotes: "\\201C""\\201D""\\2018""\\2019";
}

@media (max-width: 767px) {
    body {
        padding-top: 100px;
    }
}
`

export default GlobalStyles
