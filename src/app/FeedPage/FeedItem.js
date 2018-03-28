import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getData } from '../services/DataService'
// import { Card, Icon, Image } from 'semantic-ui-react';
// import SampleVideo_1280x720_1mb from '../../imports/video/SampleVideo_1280x720_1mb.mp4'



class FeedItem extends Component {
    constructor(props) {
        super(props);
        // this.state = { postList: [] }
    }

    // componentDidMount() {

    //     getData.fetchPosts().then((result) => {
    //         console.log(result)
    //         this.setState({ postList: result })

    //     })
    // }



    render() {
        return (

            // <div>
            //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rerum quod minima unde, quia nisi odio neque quos labore necessitatibus optio inventore dolorem mollitia quo veniam nostrum nemo, expedita dolorum!0</p>
            //     <p>Text post</p>
            //     <p>15 comments</p>
            // </div>
            <div className="container">
                <div className="row">
                    {/* <div className="ui card feed">
                
                        <iframe src="https://www.youtube.com/embed/m8e-FF8MsqU">
                       
                        </iframe>
                        <div className="extra content">
                            <a className='float-left'><i aria-hidden="true" className="video icon"></i>Video post</a>
                            <a className='float-right'><i aria-hidden="true" className="comment icon"></i>15 comments</a>
                        </div>
                    </div> */}

                    <div className="ui card feed">

                        <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas quidem laboriosam accusantium, magni magnam minima, veniam inventore sed obcaecati repellat sit modi alias excepturi fugiat impedit unde dolor dolorem!
Ipsum ab repellendus cumque, dolorum temporibus est porro natus enim nihil eligendi ipsa officiis, in deserunt perspiciatis voluptates provident aliquam veritatis facilis neque quasi alias possimus, odit quia sit. Itaque.
 Repudiandae adipisci aperiam a cum minima dolor, enim recusandae saepe temporibus tempore! Ipsam facere, dignissimos, nisi magnam placeat estabo dignissimos! Ipsam consectetur perferendis possimus nostrum quidem, suscipit voluptate.</div>

                        <div className="extra content">
                            <a className='float-left'><i aria-hidden="true" className="file alternate outline icon"></i>Text post</a>
                            <a className='float-right'><i aria-hidden="true" className="comment icon"></i>15 comments</a>
                        </div>
                    </div>


                    <div className="ui card feed">
                        <img src="https://semantic-ui.com/images/wireframe/image.png" className="ui image" />
                        <div className="extra content">
                            <a className='float-left'><i aria-hidden="true" className="image icon"></i>Image post</a>
                            <a className='float-right'><i aria-hidden="true" className="comment icon"></i>15 comments</a>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default FeedItem;

