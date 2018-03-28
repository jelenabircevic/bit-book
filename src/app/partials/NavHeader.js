import React from 'react';
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const NavHeader = (props) => {   
    return (
        <Menu borderless>
            <Menu.Menu position='right'>
                <Menu.Item header position="left">Bitbook</Menu.Item>
                <Menu.Item as={Link} to="/" active={window.location.pathname === '/'}> Feed</Menu.Item>
                <Menu.Item as={Link} to="/people" active={window.location.pathname === '/people'}>People</Menu.Item>
                <Menu.Item as={Link} to="/profile" active={window.location.pathname === '/profile'}>Profile</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default NavHeader