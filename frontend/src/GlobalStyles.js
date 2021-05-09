import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles =  createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }


    html {
        background-color: black;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body{
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size; 16px;
        line-height: 1.6;
    }

    h4 {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 1.6;
    }

    h3 {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
    }

    h2 {
        padding: 0px;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 43px;
    }

    h1 {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 58px;
    } 
`;

export default GlobalStyles;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 50px;
    max-width: 1300px;
    width: 100%;
    `;

export const Input = styled.input.attrs({
    type: "text"
})`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

    width: 60%;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 15px;

    &:focus{
        border: 1px solid #808080 !important;
        border-radius: 15px;
        transform: translateY(.2rem);
    }
`;

export const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    font-family: Roboto, sans-serif;
    border-radius: 20px;
    background-color: #D20404;
    color: #FFFFFF;
    padding: 15px;
    margin: 10px;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    border: none;
    transition: all .5s ease;
    &:hover{
        background-color: #BF2121;  
        transform: translateY(-.2rem) scale(1.01);
    }
    &:active{
        transform: translateY(.2rem);
    }
`;
