import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GetData } from '../services/DataService'
import { Card, Image, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ModalImage from 'react-modal-image'

const FeedImage = (props) => {
    console.log(props.topMargin);
    return (
        <Card>
            <Image  as={Link} to={`/image/${props.post.id}`} style={{ width: "inherit" }} src={props.post.imageUrl} />
            <Card.Content>
                <Modal style={{ marginTop: `${props.topMargin}`, marginRight: "auto", marginBottom: "auto", marginLeft: "auto" }} trigger={<a className='float-left'><i aria-hidden="true" className="image icon"></i>Image post</a>}>
                        <Image size='large' style={{margin:"auto", width:'100%'}} src={props.post.imageUrl} onLoad={props.onLoad}/>
                </Modal>
                <Link to={`/image/${props.post.id}`} className='float-right'><i aria-hidden="true" className="comment icon"></i>{props.post.commentsNum} comments</Link>
            </Card.Content>
        </Card>
    )

}


export default FeedImage;


// react-modal-image

// const FeedImage = (props) => {

//     return (
//         <Card>
//             <Image as={Link} to={`/image/${props.post.id}`} style={{ width: "inherit" }} src={props.post.imageUrl} />
//             <Card.Content extra>
//                 {/* <Modal style={{ marginTop: '100px', marginRight: "auto", marginBottom: "auto", marginLeft: "auto" }} trigger={<a className='float-left'><i aria-hidden="true" className="image icon"></i>Image post</a>}>
//                     <Image size='large' style={{ margin: "auto", width: '100%' }} src={props.post.imageUrl} onLoad={props.onLoad} />
//                 </Modal> */}

//                 <ModalImage trigger={<a className='float-left'><i aria-hidden="true" className="image icon"></i>Image post</a>}
                   
//                     large={props.post.imageUrl}
//                     alt="Hello World!"
//                 />

//                 <a className='float-right'><i aria-hidden="true" className="comment icon"></i>{props.post.commentsNum} comments</a>
//             </Card.Content>
//         </Card>
//     )

// }


// export default FeedImage;