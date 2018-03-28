import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GetData } from '../services/DataService'

const FeedText = (props) => {

    return (
        <div class="ui card feed">
            <div class="description"><p>{props.post.text}</p></div>
            <div class="extra content">
                <a className='float-left'><i aria-hidden="true" class="file alternate outline icon"></i>Text post</a>
                <a className='float-right'><i aria-hidden="true" class="comment icon"></i>{props.post.commentsNum} comments</a>
            </div>
        </div>
    )

}


export default FeedText;