import React, { Component } from 'react';
import { getData,deleteData, postData } from '../services/DataService'

// import _ from 'lodash';


class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            postID: 0,
            post: {},
            commentValue: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ commentValue: event.currentTarget.value });
    }

    sendComment = (e) => {
        e.preventDefault();

        postData.postComment(this.state.commentValue, this.state.postID)
            .then(response => {
                this.fetchComments();
            })
    }

    deletePost = (e) => {
        e.preventDefault();

        deleteData.deletePost(this.state.postID)
            .then(response => {
                this.props.history.push('/')
            })
    }

    componentDidMount() {
        this.fetchComments();
    }

    fetchComments = () => {
        getData.fetchComments(this.props.match.params.id)
            .then((result) => {
                this.setState({ commentList: result })
                this.setState({ postID: this.props.match.params.id })

                if (this.props.match.params.type === "text") {
                    getData.fetchTextPost(this.state.postID).then((result) => {
                        this.setState({ post: result })
                    })
                } else if (this.props.match.params.type === "video") {
                    getData.fetchVideoPost(this.state.postID).then((result) => {
                        this.setState({ post: result })
                    })
                } else if (this.props.match.params.type === "image") {

                    getData.fetchImagePost(this.state.postID).then((result) => {
                        this.setState({ post: result })

                    })
                }
            })
    }

    printPost() {

        if (this.props.match.params.type === "image") {
            return <img src={this.state.post.imageUrl} class="ui image" alt="post-pic" />
        } else
            if (this.props.match.params.type === "video") {
                return <iframe src={this.state.post.videoUrl} class="ui image" title="post-title"></iframe>

            } else {
                return <p className="text-align-center">{this.state.post.text}</p>
            }
    }



    render() {
        return (
            <div className="container">
                <div className="row">

                    <div class="ui card feed">

                        {this.printPost()}

                        <div class="extra content">
                        </div>
                    </div>
                    <div class="ui comments">


                    <form class="ui reply form">
                            <div class="field">
                                <textarea id="commentInput" rows="3" onChange={this.handleChange}> </textarea>
                            </div>
                            <button class="ui icon primary left labeled button" onClick={this.sendComment}>
                                <i aria-hidden="true" class="edit icon"></i>Add Comment</button>
                        </form>


                        {this.state.commentList.map((comment) => {

                            return <div class="comment">
                                <a class="avatar">
                                    <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg" alt="user-img" />
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

<button class="ui icon primary left labeled button" onClick={this.deletePost}>
                                <i aria-hidden="true" class="edit icon"></i>Delete Post</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default PostDetails;
 