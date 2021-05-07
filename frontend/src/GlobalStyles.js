import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    *{
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
        font-weight: 700;
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
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
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