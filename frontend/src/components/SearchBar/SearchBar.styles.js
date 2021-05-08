import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchBarContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;


export const SearchButton = styled(Link)`
    text-decoration: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    outline: none;
`;