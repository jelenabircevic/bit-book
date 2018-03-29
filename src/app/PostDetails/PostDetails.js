import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getData, postData } from '../services/DataService'
import _ from 'lodash'




class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            postID: 0,
            post:{},
            html:<p></p>
        };
        
        

        getData.fetchComments(props.match.params.id)
            .then((result) => {
              
                this.setState({ commentList: result })
                this.setState({ postID: props.match.params.id })

                if(this.props.match.params.type==="text"){
                    getData.fetchTextPost(this.state.postID).then((result) =>{
                this.setState({post:result})
                this.setState({html: <p>{this.state.post.text}</p> })
                    })
                }else if(this.props.match.params.type==="video"){
                    getData.fetchVideoPost(this.state.postID).then((result) =>{
                        this.setState({post:result})
                        this.setState({html: <iframe src={this.state.post.videoUrl} class="ui image" />})
                            })
                }else if(this.props.match.params.type==="image"){
                    
                    getData.fetchImagePost(this.state.postID).then((result) =>{
                       
                        this.setState({post:result})
                        this.setState({html: <img src={this.state.post.imageUrl} class="ui image" />})
                        
                            })
                }
            })

            this.sendComment = (e) => {
                e.preventDefault();
               
                postData.postComment(document.getElementById('commentInput').value, this.state.postID)
        
            }

        }
        componentDidMount(){

                

            }



    render() {
        return (
            <div className="container">
                <div className="row">

                    <div class="ui card feed">
                    {console.log(this.state.post.imageUrl)}
                    {/* {if(this.state.post.type==="video")} */}

 {this.state.html}
                        {/* <img src={this.state.post.imageUrl} class="ui image" /> */}
                        <div class="extra content">
                        </div>
                    </div>
                    <div class="ui comments">

                        {/* {console.log(this.state.postList)} */}
                        {this.state.commentList.map((comment) => {
                            // console.log(post.type)

                            return <div class="comment">
                                <a class="avatar">
                                    <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg" />
                                </a>
                                <div class="content">
                                    <div class="author">Joe Henderson</div>
                                    <div class="metadata">
                                        <div>1 day ago</div>
                                    </div>
                                    <div class="text">
                                        <p>{comment.body}</p>

                                    </div>

                                </div>
                            </div>


                        })}













                        <form class="ui reply form">
                            <div class="field">
                                <textarea id="commentInput" rows="3" >


                                </textarea>
                            </div>
                            <button class="ui icon primary left labeled button" role="button" onClick={this.sendComment}>
                                <i aria-hidden="true" class="edit icon"></i>Add Comment</button>
                        </form>
                    </div>



                </div>
            </div>
        );
    }
}

export default PostDetails;