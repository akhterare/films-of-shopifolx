import React from 'react';
import { BrowserRouter } from "react-router-dom";
import 
{
    Nav,
    NavbarContainer,
    Menu,
    MenuItems
} from './Navbar.styles';

const Navbar = () => (
    <Nav>
        <NavbarContainer>
            <Menu>
                <BrowserRouter>
                    <MenuItems to="/">Home</MenuItems>
                    <MenuItems to="/pick-films">Pick Films</MenuItems>
                    <MenuItems to="/nominations">My Nominations</MenuItems>
                </BrowserRouter>
            </Menu>   
        </NavbarContainer>
    </Nav>
)

export default Navbar;
