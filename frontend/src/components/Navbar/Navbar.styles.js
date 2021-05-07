import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    font-size: 18px;
    position: sticky;
    height: 80px;
    background-color: black;
    display: flex;
    justify-content: center;
    padding: 5px;
`;

export const NavbarContainer = styled.div`
    margin: 0 auto;
    padding: 0 50px;
    max-width: 1300px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

export const Menu = styled.div`
    position: relative;
`

export const MenuItems = styled(Link)`
    color: white;
    font-size: 16px;
    margin: 20px 0;
    margin-right:20px;
    margin-left:20px;
    padding: 10px;
    text-decoration: none;
    `;