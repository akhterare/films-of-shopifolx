import React from 'react';
import { withRouter } from "react-router-dom";
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
                <MenuItems to="/">Home</MenuItems>
                <MenuItems to="/pick-films">Pick Films</MenuItems>
                <MenuItems to="/nominations">My Nominations</MenuItems>
            </Menu>   
        </NavbarContainer>
    </Nav>
)

export default Navbar;
