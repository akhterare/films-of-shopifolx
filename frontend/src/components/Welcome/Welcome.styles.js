import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10rem;
`;

export const WelcomeContent = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
`;

export const WelcomeTitle = styled.h1`
    text-align: center;
    color: #D20404;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 64px;
    font-weight: 800;
`;

export const WelcomeSubTitles = styled.h3`
    padding: 30px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CallToAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const CallToActionBtn = styled(Link)`
    text-decoration: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    outline: none;
`;