import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FeedItem from './FeedItem';
import { GetData } from '../services/DataService'
import FeedVideo from './FeedVideo';


class FeedList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postList : []
         };

    }

    componentDidMount() {

        GetData.fetchPosts().then((result) => {
            console.log(result)
            this.setState({ postList: result })


        })


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
                                    <div class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas quidem laboriosam accusantium, magni magnam minima, veniam inventore sed obcaecati repellat sit modi alias excepturi fugiat impedit unde dolor dolorem!
Ipsum ab repellendus cumque, dolorum temporibus est porro natus enim nihil eligendi ipsa officiis, in deserunt perspiciatis voluptates provident aliquam veritatis facilis neque quasi alias possimus, odit quia sit. Itaque.
Repudiandae adipisci aperiam a cum minima dolor, enim recusandae saepe temporibus tempore! Ipsam facere, dignissimos, nisi magnam placeat estabo dignissimos! Ipsam consectetur perferendis possimus nostrum quidem, suscipit voluptate.</div>
                                    <div class="extra content">
                                        <a className='float-left'><i aria-hidden="true" class="file alternate outline icon"></i>Text post</a>
                                        <a className='float-right'><i aria-hidden="true" class="comment icon"></i>15 comments</a>
                                    </div>
                                </div>

                            } else {

                                return <div class="ui card feed">
                                    <img src="https://semantic-ui.com/images/wireframe/image.png" class="ui image" />
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