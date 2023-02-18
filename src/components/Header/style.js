import styled from "styled-components";

export  const HeaderStyle = styled.header`
    margin-top: 40px;
    margin-left: 55px;
    width: 100vw;
    height: 96px;
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;

    .line{
        content: '';
        height: 1px;
        width: 470px;
        background-color:  #FFFFFF;
        position: absolute;
        left: 190px;
        z-index: 1;
        
    }
    .container-nav{
        width: 830px;
        height: 96px;
        left: 610px;
        top: 40px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40.7742px);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        ul{
            display: flex;
            list-style-type: none;
            width: 542px;
            height: 19px;
            left: 733px;
            top: 79px;
            gap: 48px;
            background: none;
            li a{
                color: #FFFFFF;
                font-family: Barlow Condensed;
                font-size: 16px;
                font-weight: 400;
                line-height: 19px;
                letter-spacing: 2.70px;
                text-align: left;
                text-decoration: none;
                background: rgba(255, 255, 255, 0.04);
                backdrop-filter: blur(40.7742px);

                
                span{
                    font-family: Barlow Condensed;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 19px;
                    letter-spacing: 2.70px;
                    text-align: left;
                    background: none;
                }
            }
        }
    }
    
`;