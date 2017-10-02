import styled from 'styled-components'
import Images from '../../themes/images'

export const Wrapper = styled.div`
    padding: 250px 0 10vw 0;

    @media(max-width: 767px) {
        padding: 85px 0 0 0;
    }
    
`

export const Content = styled.div`
    background: url(${Images.triangle}) no-repeat top;    
    font-size: 22px;
    line-height: 31px;
    margin: auto;
    padding: 15px 0 150px 0;    

    @media(max-width:767px){
        background-size: 65vw;
        background-position: center center;
    }
    @media(max-width:592px){
        background-size: 385px;        
    }
    @media(max-width:592px){
        background-size: 95vw;        
    }
`

export const Heading = styled.h3`    
    font-weight: 300;
    line-height: normal;
    margin:30px 0 35px 0;

    @media(min-width: 1024px) {
        font-size: 80px;
    }
    @media(min-width:768px) and (max-width:1200px){
        font-size: 6vw;
    }
    @media(min-width: 592px) and (max-width: 767px){
        font-size: 6vw;
    }
    @media(max-width:592px){
        font-size: 32px;
    }
`

export const Text = styled.p`
    font-size: ${props => props.smaller ? '18px' : '25px'};
    margin: 0 0 10px;
    z-index: 0;
    line-height: 35px;

    @media(min-width:768px) and (max-width:1023px){
        font-size: ${props => props.smaller ? '13px' : '2.5vw'};
    }
    @media(max-width: 767px){
        font-size: ${props => props.smaller ? '13px' : '20px'};
        margin:  ${props => props.smaller ? '': '0 25px 0 20px'};
        line-height:30px;
    }
    @media(max-width: 392px){
        font-size: ${props => props.smaller ? '12px' : '17px'};
        line-height:25px;
    }
`

export const SignUpLink = styled.a`
    background: #fff;
    border-radius: 35px;
    cursor: pointer;
    display: inline-block;
    font-size: 22px;
    margin-bottom: 15px;
    padding: 20px 115px;
    text-decoration: none;
    font-weight: 700;
    color: #333;
    transition: 0.5s;
    -webkit-transition: 0.5s;

    &:hover, &:focus {
        background: #333;
        color: #fff;
    }
    @media(min-width: 1024px) {
        font-size: 28px;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size: 3vw;
        padding: 2vw 12vw;
    }
    @media(max-width: 767px) {
        padding: 10px 80px;
    }
    @media(max-width: 392px) {
        padding: 7px 70px;
    }
`

export const Image = styled.img`
    margin-right: 5px;
    position: relative;
    top: 5px;
`
export const Arrow = styled.div`

    img {
        width:50px;
        position: absolute;
        margin-left: -25px;
        bottom: 0;
        animation: scrolldown 2s infinite;
    }

    @keyframes scrolldown {
        0% {            
            bottom: 0px;
            transform: scale(0.95, 0.95);
        }
        10% {            
            bottom: 3px;
            transform: scale(0.9, 0.9);
        }
        20% {            
            bottom: 6px;
            transform: scale(0.87, 0.87);
        }
        30% {            
            bottom: 9px;
            transform: scale(0.85, 0.85);
        }
        40% {            
            bottom: 12px;
            transform: scale(0.82, 0.82);
        }
        50% {            
            bottom: 15px;
            transform: scale(0.8, 0.8);
        }       
        100% {            
            bottom: 0px;
            transform: scale(1, 1);
        }
        
    }
    @media(max-width:767px){
        display: none;
    }
`