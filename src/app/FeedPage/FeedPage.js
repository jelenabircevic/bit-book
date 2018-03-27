import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FeedList from './FeedList';



class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <FeedList/>
        );
    }
}

export default FeedPage;