import styled from 'styled-components'

export const Wrapper = styled.div`    
`
export const Heading = styled.h1`
    margin: 90px 0 60px 12vw;
    font-size: 65px;        
    font-weight: 400;  
    text-algin: left;  

    @media(max-width: 767px){ font-size: 8.4vw;}
    @media(max-width: 592px){ 
        text-align: center;
        margin: 15.2vw auto 10vw;
    }
    @media(max-width: 392px){ 
        font-size: 32px;
        text-align:center;
        margin: 60px auto 40px;
        font-weight: 700
    }    
`
export const UserWrapper = styled.div`
    margin-left: 12vw;
    display: flex;        
    @media(min-width:1024px){
        align-items: center;
    }
    @media(max-width:1023px){
        flex-direction: column;
    }
`
export const Avatar = styled.img`
    color: rgb(255, 255, 255);
    background-color: rgb(188, 188, 188);
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 50%;
    height: 250px;
    width: 250px;

    @media(max-width:1023px){
        align-self: center;
        margin-right: 12vw;
    }
    @media(max-width:767px){
        width: 32vw;
        height: 32vw;
    }
    @media(max-width:592px){
        width: 40vw;
        height: 40vw;
    }
    @media(max-width:392px){
        width: 50vw;
        height: 50vw;
    }
`
export const LocationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width:1024px){
        margin: 70px 0 70px 65px;
        min-width: 550px;
    }    
    @media(max-width:767px){
        h1 {
            font-size: 4.2vw;
        }
    }
    @media(max-width:592px){                
        h1 {
            font-size: 6vw;            
        }
    }
`
export const DetailWrapper = styled.div`     
    margin: 30px 0 0 12vw;
    display: flex;

    @media(max-width:592px){
        flex-direction: column;
        margin: 30px 0 0;
    }
`
export const CircleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    @media(min-width:768px){
        margin: 20px 40px 10px;
    }
`
export const BgCircle = styled.div`
    background-color: #c5eac5;
    border-radius: 100px;
    display: flex;
    justify-content: center;  
    align-items: center;  
    width: 170px;
    height: 170px;

    @media(max-width:767px){
        width: 22.2vw;
        height: 22.2vw;
        margin: 20px 5vw 0;
    }
    @media(max-width:592px){
        width: 30vw;
        height: 30vw;
        margin: 0;
    }
`
export const Detail = styled.div`
    margin-left: 65px;
    div {
        display: flex;
        div {
            display: flex;
            flex-direction: column;
            text-align: left;
        }
        div:first-child {
            margin-right: 50px;
            @media(max-width:767px){
                margin-right: 3vw;
            }
        }
        p {
            font-size: 15px;
            line-height: 3px;
            @media(max-width: 767px){
                font-size: 2vw;
            }
            @media(max-width:592px){
                font-size: 2.5vw;
            }
        }        
    }
    @media(max-width: 767px){
        margin-left: 8.5vw;        
        h1 {
            font-size: 4.2vw;
        }                     
    }
    @media(max-width:592px){
        margin-left: 0;
        text-align: center;
        div {
            justify-content: center;
            div { 
                justify-content: center;                   
            }
            div:last-child {
                text-align: left;
            } 
        }
        h1 {
            font-size: 6vw;
        }
    }
    @media(max-width:392px){
        
        div {
            p {
                font-size: 3.5vw;
            }
        }
    }
`
export const TagWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 70px auto;
    max-width: 800px;
    @media(max-width:1124px){
        margin-left: 12vw;
    }
    @media(max-width:767px){
        h1 {
            font-size: 4.2vw;
        }
    }
    @media(max-width:592px){  
        margin-top: 10vw;      
        h1 {
            font-size: 6vw;            
        }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto 70px;
    max-width: 800px;   
    flex-wrap: wrap;

    p {
        font-size: 17px;
        line-height: 25px;
        color: #333;
        margin: auto;        
    }
    a {
        border: 1px solid #a9a9a9;
        font-size: 17px;
        color: #777;
        border-radius: 50px;
        padding: 10px;
        margin: 20px 0;
        display: flex;
        justify-content: center;        
        width: 230px; 

    }
    @media(max-width:1124px){
        margin-left: 12vw;
        max-width: 75vw;
    }
    @media(max-width:767px){
        h1 {
            font-size: 4.2vw;
        }
    }
    @media(max-width:592px){  
        margin-top: 10vw;      
        h1 {
            font-size: 6vw;            
        }
    }
    @media(max-width:392px){
        p {
            font-size: 15px;
        }
        a {
            font-size: 15px;
            width: 200px;
        }
    }
`
export const FieldWrapper = styled.div`
    margin: auto;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    div {
        display: flex;        
        align-items: center;
        margin: 5px 0;
        font-size: 25px;
        a {
            border: 1px solid #c5eac5;
            background-color: #c5eac5;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90px;
            height: 90px;
            margin-right: 30px;
        }
    }
    @media(max-width:1124px){
        margin-left: 12vw;
        max-width: 75vw;
    }
    @media(max-width:767px){
        h1 {
            font-size: 4.2vw;
        }
        div {
            font-size: 3.3vw;
            a {
                width: 12vw;
                height: 12vw;
            }
        }
    }
    @media(max-width:592px){       
        h1 {
            font-size: 6vw;            
        }
        div {
            font-size: 20px;
            a {
                width: 71px;
                height: 71px;
            }
        }
    }
    @media(max-width:392px){       
        div {
            font-size: 5vw;            
            a {
                width: 18.2vw;
                height: 18.2vw;
            }
        }        
    }
`
export const Contact = styled.div`
    display: flex;
    margin: 70px auto;
    max-width: 800px;
    flex-wrap: wrap;

    a {
        padding: 20px 80px;    
        color: #FFF;
        font-size: 25px;
        font-weight: 700;
        border-radius: 50px;        
        background-color: #4cbf69;
        transition: 0.5s;
        -webkit-transition: 0.5s;
    
        &:hover {
            cursor: pointer;
            background-color: #67c77f;
        }
        @media(max-width: 1023px){ padding: 17px 80px;}
        @media(max-width: 478px){ 
            padding: 17px 17vw;
            font-size: 5vw;
        }
    }
    @media(max-width:1124px){
        margin-left: 12vw;
    }
`