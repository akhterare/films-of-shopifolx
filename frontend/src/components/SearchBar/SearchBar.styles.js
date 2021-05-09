import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchBarContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const SearchBtn = styled(Link)`
    text-decoration: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    outline: none;
`;

export const SearchBarSubtitleContainer = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 2;
`;

export const SearchButtonSubtitle = styled.p`
    color: #FFFFFF;
    display: block;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    outline: none;
`