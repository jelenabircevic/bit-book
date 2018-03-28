import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GetData } from '../services/DataService'
// import { Card, Icon, Image } from 'semantic-ui-react';
// import SampleVideo_1280x720_1mb from '../../imports/video/SampleVideo_1280x720_1mb.mp4'



const FeedVideo= (props) => {

    let videoLink = props.post.videoUrl;
    if (!videoLink.includes("embed")) {
        videoLink = videoLink.replace("watch?v=", "/embed/");
    }


    return (
        < div className="ui card feed" >
            <iframe src={videoLink}>
            </iframe>
            <div className="extra content">
                <a className='float-left'><i aria-hidden="true" class="video icon"></i>Video post</a>
                <a className='float-right'><i aria-hidden="true" class="comment icon"></i>{props.post.commentsNum} comments</a>
            </div>
        </div>
    )

}


export default FeedVideo;

