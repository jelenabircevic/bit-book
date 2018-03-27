import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FeedItem from './FeedItem';


class FeedList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <FeedItem/>
        );
    }
}

export default FeedList;