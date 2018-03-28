import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GetData } from '../services/DataService'

const FeedImage = (props) => {

    return (
        <div class="ui card feed">
            <img src={props.post.imageUrl} class="ui image" />
            <div class="extra content">
                <a className='float-left'><i aria-hidden="true" class="image icon"></i>Image post</a>
                <a className='float-right'><i aria-hidden="true" class="comment icon"></i>{props.post.commentsNum} comments</a>
            </div>
        </div>
    )

}


export default FeedImage;