import styled from "styled-components";
import imgDesktop from '../../assets/home/background-home-desktop.jpg';

export const HomeStyle = styled.div`
    color: #FFFFFF;
    background-image: url(${imgDesktop});
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: -1;

    display: flex;
    align-items: center;
    justify-content: center;
`