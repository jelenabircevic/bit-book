import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class FeedItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rerum quod minima unde, quia nisi odio neque quos labore necessitatibus optio inventore dolorem mollitia quo veniam nostrum nemo, expedita dolorum!0</p>
                <p>Text post</p>
                <p>15 comments</p>
            </div>

        );
    }
}

export default FeedItem;