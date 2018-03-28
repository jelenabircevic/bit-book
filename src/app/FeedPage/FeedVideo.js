import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GetData } from '../services/DataService'
// import { Card, Icon, Image } from 'semantic-ui-react';
// import SampleVideo_1280x720_1mb from '../../imports/video/SampleVideo_1280x720_1mb.mp4'



class FeedItem extends Component {
    constructor(props) {
        super(props);
        this.state = { postList: [] }
    }

    // componentDidMount() {

    //     GetData.fetchPosts().then((result) => {
    //         console.log(result)
    //         this.setState({ postList: result })

    //     })
    // }



    render() {
        return (

<div></div>

           
        );
    }
}

export default FeedItem;