import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getData } from '../services/DataService'
import FeedVideo from './FeedVideo';
import FeedText from './FeedText';
import FeedImage from './FeedImage';


class FeedList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postList : []
         };

    }

    componentDidMount() {

        getData.fetchPosts().then((result) => {
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

                            return <FeedVideo post={post} />

                        } else
                            if (post.type == "text") {

                                return <FeedText post={post} />

                            } else {

                                return <FeedImage post={post} />

                            }
                    }

                    )}

                </div>
            </div>
        );
    }
}

export default FeedList;