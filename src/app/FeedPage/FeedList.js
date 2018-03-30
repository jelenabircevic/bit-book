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
            postList: [],
            filteredList: []
        };


    }

    renderFeed() {
        getData.fetchPosts()
            .then((result) => {
                this.setState({ postList: result })
                this.setState({ filteredList: result })

            })
    }

    showVideos=() => {

        let newPostList = [];
        this.state.postList.forEach(element => {
            
            if (element.type === 'video') {
                newPostList.push(element)
            }
        });
        this.setState({ filteredList : newPostList });
    }

    showImages=() => {
        let newPostList = [];
        this.state.postList.forEach(element => {
            
            if (element.type === 'image') {
                newPostList.push(element)
            }
        });
        this.setState({ filteredList : newPostList });
    }
    showAll=() => {
       
        this.setState({ filteredList: this.state.postList});
    }

    showTexts=() => {
        let newPostList = [];
        this.state.postList.forEach(element => {
            
            if (element.type === 'text') {
                newPostList.push(element)
            }
        });
        this.setState({ filteredList : newPostList });
    }

    componentDidMount() {
        this.renderFeed()
    }

    componentWillReceiveProps(nextProps) {
        this.renderFeed()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if ((nextProps.reRender === this.props.reRender) && _.isEqual(this.state.filteredList, nextState.filteredList)) {
            return false;
        }
        return true;
    }

    map = (post) => {
        if (post.type == "video") {
            return <Link to={`/${post.type}/${post.id}`}><FeedVideo post={post} /></Link>
        } else
            if (post.type == "text") {
                return <Link to={`/${post.type}/${post.id}`}><FeedText post={post} /></Link>
            } else {
                return <Link to={`/${post.type}/${post.id}`}><FeedImage post={post} /></Link>
            }
    }



    render() {
        return (
            <div className="container fluid">
                <div className="row">
                    {/* {console.log(this.state.postList)} */}

                    <div>

                        <button class="ui red basic button" role="button" onClick={this.showVideos}>Show Videos</button>
                        <button class="ui orange basic button" role="button" onClick={this.showImages}>Show Images</button>
                        <button class="ui yellow basic button" role="button" onClick={this.showTexts}>Show Texts</button>
                        <button class="ui blue basic button" role="button" onClick={this.showAll}>Show All</button>
                        

                    </div>

                    {this.state.filteredList.map(this.map)}

                </div>
            </div>
        );
    }
}

export default FeedList;