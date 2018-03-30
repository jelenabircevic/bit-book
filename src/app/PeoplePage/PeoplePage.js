import React, { Component } from 'react';
import { Input, Grid } from 'semantic-ui-react'
import { getData } from '../services/DataService';
import PeopleList from './PeopleList';

class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: {
                value: '',
                result: []
            }
        };
    }

    filter = (e) => {
        const etv = e.target.value.toLowerCase();
        this.setState(prevState => ({
            search: {
                result: prevState.data.filter(user => user.name.toLowerCase().match(etv) !== null)
        }}));
    }

    searchUsers() {
        return <Input fluid
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Search people...'
            onChange={this.filter}
        />
    }


    componentDidMount() {
        getData.getUsers().then(response => {
            this.setState({
                data: response,
                search: {
                    result: response
                }
            })
        })
    }
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width="four">
                    </Grid.Column>
                    <Grid.Column width="eight">
                        {this.searchUsers()}
                        < PeopleList data={this.state.search.result} />
                    </Grid.Column>
                    <Grid.Column width="four">
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default PeoplePage;