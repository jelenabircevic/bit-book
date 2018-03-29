import React, { Component } from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react'
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
                    <Icon name='file text' />
                    {`${this.state.user.postsCount} post(s)`}
                </a>
                <a className="float-right">
                    <Icon name='comment' />
                    {`${this.state.user.commentsCount} comment(s)`}
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
                        <Card centered fluid
                            image={this.state.user.avatarUrl}
                            header={this.state.user.name}
                            // meta='Friend'
                            description={this.state.user.about}
                            extra={extra}
                        />
                    </Grid.Column>
                    <Grid.Column width="4">
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        );
    }
}

export default ProfilePage;