import React from 'react';
import { Menu } from 'semantic-ui-react'


const Header = (props) => {   
    return (
        <Menu borderless>
            <Menu.Menu position='right'>
            <Menu.Item><h1>Bitbook</h1></Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item active={window.location.pathname === '/'}  href='/'>Feed</Menu.Item>
                <Menu.Item active={window.location.pathname === 'people'}  href='#/people'>People</Menu.Item>
                <Menu.Item active={window.location.pathname === 'profile'}  href='#/profile'>Profile</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default Header