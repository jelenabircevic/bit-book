import React from 'react';
import {Menu} from 'semantic-ui-react'      

const items = [
    { key: 'feed', active: false, name: 'Feed' },
    { key: 'people', name: 'People' },
    { key: 'profile', name: 'Profile' },
]

const Header = () => {
    return (<Menu>
            <Menu.Menu position='right'>
                <Menu.Item active={true} onClick={console.log}>Feed</Menu.Item>
                <Menu.Item onClick={console.log}>People</Menu.Item>
                <Menu.Item onClick={console.log}>Profile</Menu.Item>
            </Menu.Menu>
            </Menu>
    )
}

export default Header