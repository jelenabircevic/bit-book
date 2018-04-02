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
            filteredList: [],
            infiniteControl: 9
        };
    }

    renderFeed() {
        getData.fetchPosts()
            .then((result) => {
                this.setState({ postList: result })
                this.setState({ filteredList: result })
            })
    }

    showVideos = () => {
        let newPostList = [];
        this.state.postList.forEach(element => {
            if (element.type === 'video') {
                newPostList.push(element)
            }
        });
        this.setState({ filteredList: newPostList });        
    }

    showImages = () => {
        let newPostList = [];
        this.state.postList.forEach(element => {

            if (element.type === 'image') {
                newPostList.push(element)
            }
        });
        this.setState({ filteredList: newPostList });
    }

    showAll = () => {
        this.setState({ filteredList: this.state.postList });
    }

    showTexts = () => {
        let newPostList = [];
        this.state.postList.forEach(element => {
            if (element.type === 'text') {
                newPostList.push(element)
            }
        });
        this.setState({ filteredList: newPostList });
    }

    componentDidMount() {
        this.renderFeed()
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillReceiveProps(nextProps) {
        this.renderFeed()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if ((nextProps.reRender === this.props.reRender) && _.isEqual(this.state.filteredList, nextState.filteredList) && (nextState.infiniteControl === this.state.infiniteControl)) {
            return false;
        }
        return true;
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }
    
    map = (post) => {
        if (post.type == "video") {
            return <Link to={`/${post.type}/${post.id}`}><FeedVideo post={post} /></Link>
        } else
            if (post.type == "text") {
                return <FeedText post={post} />
            } else {
                return <FeedImage post={post} />
            }
    }

    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.getElementById('root').offsetHeight - 200) && this.state.filteredList.length) {
            console.log(window.innerHeight);
            console.log(window.scrollY);
            console.log(document.getElementById('root').offsetHeight);
            console.log('scroll');
            this.setState((prevState, props) => {
                return {infiniteControl: (prevState.infiniteControl+3)}
            })
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
                    {this.state.filteredList.slice(0, this.state.infiniteControl).map(this.map)}
                </div>
            </div>
        );
    }
}

export default FeedList;