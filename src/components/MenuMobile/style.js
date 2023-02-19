import styled, { css } from "styled-components";

export const MenuMobileStyle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    width: 0%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;

    .icon-menu{
        cursor: pointer;
        width: 30px;
        position: absolute;
        top: 1em;
        right: 1em;

        img{
            width: 100%;
        }
    }

    nav{

        ul{
            list-style-type: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2rem;

            li a{
                text-decoration: none;
                color: #FFFFFF;
                border-bottom: 2px solid transparent;
                padding-bottom: 2px;
                transition: 0.5s;
                
                span{
                    font-weight: bold;
                    padding-right: 5px;
                }

                &:hover{
                    border-bottom: 2px solid #FFFFFF;
                }
            }
        }
    }

    ${ ({isVisible}) => isVisible && css`
        opacity: 1;
        pointer-events: all;
        width: 70%;
    `}

`