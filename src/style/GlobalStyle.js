import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Barlow, sans-serif;
    }
    body{
        height: calc(100vh - 136px);
        background-color: #0B0D17;
    }
    html{
        overflow-x: hidden;
    }
`