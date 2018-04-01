import React, { Component } from 'react';
import { Card, Icon, Grid, Button, Image, Modal } from 'semantic-ui-react'
import { getData, postData } from '../services/DataService'
import ModalEdit from './ModalEdit'

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.userEdit = {}
        this.state = {
            nameLength: 0,
            modal: {
                open: false,
                size: 'small'
            },
            user: {},
        };

        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
        this.handleImageInput = this.handleImageInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleInfoInput = this.handleInfoInput.bind(this);
        this.sendEdit = this.sendEdit.bind(this);
        this.validateUrl = this.validateUrl.bind(this);
    }
    show = size => () => this.setState({
        modal: { size, open: true }
    })
    close = () => {
        this.setState({
            modal: { show: false },
            nameLength: 0,
            errorLength: '',
            errorUrl: ''
        })
        this.userEdit = {}
    }

    
    handleNameInput(e) {
        this.userEdit.name = e.target.value
        this.setState({
            nameLength: this.userEdit.name.length,
            errorLength: '',
        })
    }
    handleImageInput(e) {
        this.userEdit.avatarUrl = e.target.value
        this.setState({ errorUrl: '' })
    }
    handleInfoInput(e) {
        this.userEdit.about = e.target.value
    }
    
    isValidImage(input) {
        return ((input.match(/\.(jpeg|jpg|gif|png)$/) != null) && (input.match(/^(http|https):\/\//) != null));
    }
    validateUrl () {
        if (this.userEdit.avatarUrl) {
            if (!this.isValidImage(this.userEdit.avatarUrl)) {
                this.setState({ errorUrl: 'Not valid image URL' })
                return true
            }
        }
        return false;
    }

    sendEdit() {
        if (this.validateUrl()) {
            return
        }
        if (this.state.nameLength > 30) {
            this.setState({ errorLength: 'Name must be shorter than 30 letters!' })
            return
        }
        const data = this.state.user
        data.email = 'user@unFriendly'
        if (this.userEdit.name) {
            data.name = this.userEdit.name
        }
        if (this.userEdit.about) {
            data.about = this.userEdit.about
        }
        if (this.userEdit.avatarUrl) {
            data.avatarUrl = this.userEdit.avatarUrl
        }
        postData.editUser(data)
        this.close()
    }

    componentDidMount() {
        getData.getUser(this.props.match.params.id)
            .then((result) => {
                this.setState({ user: result })
            })
    }

    render() {

        const extra = (
            <div>
                <a className="float-left">
                    <Button circular content={this.state.user.postsCount} color="teal" id="addButton" label="post(s)" />


                </a>
                <a className="float-right">
                    <Button circular content={this.state.user.commentsCount} color="violet" id="addButton" label="comment(s)" />

                </a>
            </div>
        )

        /* if (_.isEmpty(this.state.user)) {
               return 
               <Loader />
           )
       } */
        return (
            <React.Fragment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width="4">
                        </Grid.Column>
                        <Grid.Column width="8">
                            <Card centered fluid >
                                <Image style={{ width: 'inherit' }} src={this.state.user.avatarUrl} />
                                <Card.Content>
                                    <Card.Header className="float-left" size="large">{this.state.user.name}</Card.Header>
                                    <Button className="float-right" basic color="grey" size="mini" onClick={this.show('small')}>Edit profile</Button>
                                    <Card.Description>{this.state.user.about}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    {extra}
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width="4">
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <ModalEdit modal={this.state.modal} nameLength={this.state.nameLength} close={this.close} handleInfoInput={this.handleInfoInput} handleImageInput={this.handleImageInput} handleNameInput={this.handleNameInput} sendEdit={this.sendEdit} errorUrl={this.state.errorUrl} errorLength={this.state.errorLength} validateUrl={this.validateUrl} />
            </React.Fragment>
        );
    }
}

export default ProfilePage;