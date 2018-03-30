import React, { Component } from 'react';
import { Card, Icon, Grid, Button, Image } from 'semantic-ui-react'
import { getData } from '../services/DataService'

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        getData.getUser(this.props.match.params.id)
            .then((result) => {
                console.log(result);
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

        return (
            /* if (_.isEmpty(this.state.user)) {
                   return 
                   <Loader />
               )
           } */
            <Grid>
                <Grid.Row>
                    <Grid.Column width="4">
                    </Grid.Column>
                    <Grid.Column width="8">
                        <Card centered fluid >
                            <Image style={{width: 'inherit'}} src={this.state.user.avatarUrl} />
                            <Card.Content>
                                <Card.Header>{this.state.user.name}</Card.Header>
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

        );
    }
}

export default ProfilePage;