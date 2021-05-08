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
                <MenuItems to="/films-of-shopifolx/">Home</MenuItems>
                <MenuItems to="/films-of-shopifolx/pick-films">Pick Films</MenuItems>
                <MenuItems to="/films-of-shopifolx/nominations">My Nominations</MenuItems>
            </Menu>   
        </NavbarContainer>
    </Nav>
)

export default Navbar;
