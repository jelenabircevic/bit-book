import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FeedList from './FeedList';
import Loader from '../partials/Loader'
import { Button, Label, Image, Modal, Form } from 'semantic-ui-react'
import _ from 'lodash'
import { postData, getData } from '../services/DataService'



class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: {
                show: false,
                icon: "add"
            },
            modal: {
                open: false
            },
            data: []
        };
        this.addButtonOnClick = this.addButtonOnClick.bind(this);
        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
    }

    addButton() {
        return (
            <div id="addButtons">
                {this.postButtons()}
                <Button circular icon={this.state.buttons.icon} color="orange" id="addButton" label="New post" onClick={this.addButtonOnClick} />

            </div>
        )
    }

    addButtonOnClick() {
        this.setState(prevState => {
            return {
                buttons: {
                    show: !prevState.buttons.show,
                    icon: prevState.buttons.show ? 'add' : 'x'
                }
            }
        })
    }

    postButtons() {
        if (this.state.buttons.show === true) {
            return (
                <React.Fragment>
                    <Button circular icon="picture" color="teal" id="imageButton" onClick={this.show('image ')} />
                    <Button circular icon="pencil" color="red" id="postButton" onClick={this.show(' ')} />
                    <Button circular icon="video" color="yellow" id="videoButton" onClick={this.show('video ')} />
                </React.Fragment>
            )
        }
    }

    show = type => () => this.setState({
        modal: {
            type,
            open: true
        }
    })
    close = () => this.setState({ modal: { open: false } })

    modal() {

        return (
            <Modal style={{ marginTop: 500, marginRight: "auto", marginBottom: "auto", marginLeft: "auto" }} size={"large"} open={this.state.modal.open} onClose={this.close}>
                <Modal.Header>
                    {`New ${this.state.modal.type}Post`}
                </Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Post content</label>
                            <input id='textInput' placeholder='Start typing here...' />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="teal" onClick={this.sendTextPost} >Post</Button>
                </Modal.Actions>
            </Modal>
        )
    }

    sendTextPost() {
        this.setState({
            modal:
                { open: false },
            buttons: {
                show: false,
                icon: "add"
            }
        });
        postData.postText(document.getElementById('textInput').value)
            .then(response => {
                this.setState({data: response})
            })
    }




render() {
    /* if (_.isEmpty(this.state.data)) {
        return (<React.Fragment>
            {this.addButton()}
            <Loader />
            {this.modal()}
        </React.Fragment>
        )
    } */
    return (
        <React.Fragment>
            {this.addButton()}
            <div className="ui grid">
                <div className="four wide column"></div>
                <div className="eight wide column center aligned"><FeedList data={this.state.data}/></div>
                <div className="four wide column"></div>
            </div>
            {this.modal()}
        </React.Fragment>


    )
}
}

export default FeedPage;