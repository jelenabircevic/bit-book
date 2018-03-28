import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FeedItem from './FeedItem';
import { getData } from '../services/DataService'
import FeedVideo from './FeedVideo';
import _ from 'lodash'


class FeedList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postList : []
         };

    }

    renderFeed() {
        getData.fetchPosts()
            .then((result) => {
                this.setState({ postList: result })
            })
    }

    componentDidMount() {
        this.renderFeed()
    }

    componentWillReceiveProps(nextProps) {
        this.renderFeed()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if ((nextProps.reRender === this.props.reRender) && _.isEqual(this.state.postList, nextState.postList)) {
            return false;
        }

        return true;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* {console.log(this.state.postList)} */}
                    {this.state.postList.map((post) => {
                        // console.log(post.type)
                        if (post.type == "video") {

                            let videoLink = post.videoUrl;

                            if (!videoLink.includes("embed")) {
                                // videoLink = videoLink.split('watch?v=');
                                // videoLink = videoLink[0] + '/embed/' + videoLink[1]
                                videoLink = videoLink.replace("watch?v=", "/embed/");
                            }
                            // console.log(post.videoUrl)
                            return < div className="ui card feed" >
                                <iframe src={videoLink}>
                                </iframe>
                                <div className="extra content">
                                    <a className='float-left'><i aria-hidden="true" class="video icon"></i>Video post</a>
                                    <a className='float-right'><i aria-hidden="true" class="comment icon"></i>15 comments</a>
                                </div>
                            </div>

                        } else
                            if (post.type == "text") {

                                return <div class="ui card feed">
                                    <div class="description">{post.text}</div>
                                    <div class="extra content">
                                        <a className='float-left'><i aria-hidden="true" class="file alternate outline icon"></i>Text post</a>
                                        <a className='float-right'><i aria-hidden="true" class="comment icon"></i>15 comments</a>
                                    </div>
                                </div>

                            } else {

                                return <div class="ui card feed">
                                    <img src={post.imageUrl} class="ui image" />
                                    <div class="extra content">
                                        <a className='float-left'><i aria-hidden="true" class="image icon"></i>Image post</a>
                                        <a className='float-right'><i aria-hidden="true" class="comment icon"></i>15 comments</a>
                                    </div>
                                </div>

                            }
                    }





                    )}







                </div>
            </div>
        );
    }
}

export default FeedList;