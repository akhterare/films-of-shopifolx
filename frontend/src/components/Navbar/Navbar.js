import React from 'react';
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
            </Menu>   
        </NavbarContainer>
    </Nav>
)

export default Navbar;
