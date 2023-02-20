import styled from "styled-components";

export  const HeaderStyle = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .logo{
        margin-top: 2em;
        padding-left: 2em;
        position: relative;
        width: 50%;
    }
    hr{
       position: absolute;
       right: -15%;
       top: 20px;
       width: 90%;
       border: none;
       z-index: 4;
       border-bottom: 2px solid #FFFFFF;
    }


    .container-nav{
        width: 65%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2em;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40.7742px);
        ul{
            display: flex;
            list-style-type: none;
           
            li a{
                text-decoration: none;
                display: block;
                color: #FFFFFF;
                margin: 2em 1em;
                font-family: "Barlow Condensed";
                border-bottom: 2px solid transparent;
                transition: 0.5s;
                font-size: 1.1rem;
                &:hover{
                    border-bottom: 2px solid #FFFFFF !important;
                }

                span{
                    font-weight: bold;
                }
            }
        }

        .icon-menu{
            width: 50px;
            display: none;
            img{
                width: 100%;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 1060px) {
        hr{
            display: none;
        }
    }
    @media (max-width: 820px) {
        .logo{
            width: 30%;
            margin-top: 1em;
        }
        .container-nav{
            width: 70%
        }
    }
    @media (max-width: 710px) {
        
        span{
            display: none;
        }
    }
    @media (max-width: 500px) {
        &{
            width: auto;
        }

        .container-nav{
            justify-content: flex-end;
            background-color: none;
            backdrop-filter: none;

            ul{
                display: none;
            }

            .icon-menu{
                display: block;
                
            }
        }
    }
`;