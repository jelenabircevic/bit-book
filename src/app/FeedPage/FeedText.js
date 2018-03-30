import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GetData } from '../services/DataService'
import { Card } from 'semantic-ui-react'

const FeedText = (props) => {

    return (
        <Card>
            <Card.Description><p>{props.post.text}</p></Card.Description>
            <Card.Content extra>
                <a className='float-left'><i aria-hidden="true" className="file alternate outline icon"></i>Text post</a>
                <a className='float-right'><i aria-hidden="true" className="comment icon"></i>{props.post.commentsNum} comments</a>
            </Card.Content>
        </Card>
    )

}


export default FeedText;