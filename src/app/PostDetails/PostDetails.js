import React, { Component } from 'react';
import { getData, postData } from '../services/DataService'
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
            return <img src={this.state.post.imageUrl} className="ui image" alt="post-pic" />
        } else
            if (this.props.match.params.type === "video") {
                return <iframe src={this.state.post.videoUrl} className="ui image" title="post-title" />

            } else {
                return <p className="text-align-center">{this.state.post.text}</p>
            }
    }



    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="ui card feed">

                        {this.printPost()}

                        <div className="extra content">
                        </div>
                    </div>
                    <div className="ui comments">
                        {this.state.commentList.map((comment) => {

                            return <div className="comment">
                                <a className="avatar">
                                    <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg" alt="user-img" />
                                </a>
                                <div className="content">
                                    <div className="author">Joe Henderson</div>
                                    <div className="metadata">
                                        <div>1 day ago</div>
                                    </div>
                                    <div className="text">
                                        <p>{comment.body}</p>
                                    </div>
                                </div>
                            </div>
                        })}

                        <form className="ui reply form">
                            <div className="field">
                                <textarea id="commentInput" rows="3" onChange={this.handleChange}> </textarea>
                            </div>
                            <button className="ui icon primary left labeled button" onClick={this.sendComment}>
                                <i aria-hidden="true" className="edit icon"></i>Add Comment</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default PostDetails;