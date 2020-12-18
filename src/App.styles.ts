import styled, { createGlobalStyle } from "styled-components";

import BGImage from "./images/bg.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        place-items: center;
        height: 100%;

    }


    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;

    }

`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    
    > p {
        color: #fff;
    }

    .score{
        color: #fff;
        font-size: 2rem;
        margin: 0;
        font-weight: 300
    }
    h1{
        color: #FFF;
        font-weight: bold;
    }
    button{
        cursor: pointer;
        height: 100%;
        width: 100%;
        background-color: rgba(200,200,255, 1);
        font-size: 1em;
        padding: 1em;
        border: none;
        border-radius: 20px;
    }
    button:hover{
        background-color: rgba(0,0,255, 1);
        color: white;
    }

    .next{
        margin-top: 20px;
         
        
    }
   
`

export const Card = styled.div`
    background: #fff;
    padding: 2em;
    text-align: center;
    border-radius: 20px;
    margin-top: 10px;
    place-items: center;
    display: flex;
    flex-direction: column;
    max-width: 600px;

    .answers{
        display: grid;
        grid-template-columns : 1fr 1fr;
        gap: 1em;
        place-items: stretch;
    }

    .question{
        width: 80%;
        font-size: 1.2em
    }

    button{
       
        background-color: rgba(0,0,255, 0.3);
       
    }
    button:hover{
        background-color: rgba(0,0,255, 0.7);
    }



`