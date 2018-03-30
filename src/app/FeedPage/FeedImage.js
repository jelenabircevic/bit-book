import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GetData } from '../services/DataService'
import { Card, Image } from 'semantic-ui-react'

const FeedImage = (props) => {

    return (
        <Card>
                <Image style={{width:"inherit"}} src={props.post.imageUrl} />
            <Card.Content extra>
                <a className='float-left'><i aria-hidden="true" className="image icon"></i>Image post</a>
                <a className='float-right'><i aria-hidden="true" className="comment icon"></i>{props.post.commentsNum} comments</a>
            </Card.Content>
        </Card>
    )

}


export default FeedImage;