import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getData } from '../services/DataService'
import _ from 'lodash'
import FeedVideo from './FeedVideo';
import FeedText from './FeedText';
import FeedImage from './FeedImage';
import { Link } from 'react-router-dom';

class FeedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: []
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

    map = (post) => {
        if (post.type == "video") {
            return <FeedVideo post={post} />
        } else
            if (post.type == "text") {
                return <Link to={`/${post.type}/${post.id}`}><FeedText post={post} /></Link>
            } else {
                return <Link to={`/${post.type}/${post.id}`}><FeedImage post={post} /></Link>
            }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* {console.log(this.state.postList)} */}
                    {this.state.postList.map(this.map)}
                </div>
            </div>
        );
    }
}

export default FeedList;