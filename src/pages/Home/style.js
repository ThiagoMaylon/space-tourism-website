import styled from "styled-components";
import imgDesktop from '../../assets/home/background-home-desktop.jpg';
import imgTablet from '../../assets/home/background-home-tablet.jpg';
import imgMobile from '../../assets/home/background-home-mobile.jpg';

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
    z-index: -2;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    
    div{
        max-width: 450px;
        
        z-index: 3;
    }
    .container-text{
        margin-right: 270px;
        margin-left: 30px;
        margin-bottom: 150px;
        h2{
            
        }
        h1{
            font-size: 3.5rem;
            margin: 10px 0;
            font-family: Bellefair;
            font-weight: lighter;
        }

    }
    .container-cicle{
        display: flex;
        height: 500px;
        align-items: flex-end;
        margin-bottom: 130px;
        margin-right: 10px;
        .cicle{
            background-color: #FFFFFF;
            color: #0B0D17;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Bellefair;
            font-weight: lighter;
            font-size: 2rem;
        }
    }

    @media (max-width: 900px) {
        background-image: url(${imgTablet});
        background-size: cover;
        background-position: center center;
    }
    @media (max-width: 500px) {
        background-image: url(${imgMobile});
        background-size: cover;
        background-position: center center;
    }
`