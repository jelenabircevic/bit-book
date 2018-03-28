import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FeedList from './FeedList';
import Loader from '../partials/Loader'
import _ from 'lodash'



class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        if (_.isEmpty(this.state)) {
            return <Loader/>
        }
        return (
            
            <div class="ui grid">
                <div class="four wide column"></div>
                <div class="eight wide column center aligned"><FeedList /></div>
                <div class="four wide column"></div>
            </div>

        );
    }
}

export default FeedPage;