import React, { Component } from 'react';
import { Grid, Form, Button, Tab } from 'semantic-ui-react';
import { postData } from '../services/DataService'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            error: ''
        }
    }

    onRegister = () => {
        postData.userRegister(this.state.userName, this.state.password)
            .then(result => {
                if (result.status === 200) {
                    this.props.history.push('/login')
                } else {
                    this.setState({ error: result });
                }
            })
    }

    onLogin = () => {
        postData.userLogin(this.state.userName, this.state.password)
            .then(result => {
                if (result.status === 200) {
                    this.props.onLogin();
                } else {
                    this.setState({ error: result });
                }
            })
    }

    getUser = (e) => {
        this.setState({

            userName: e.target.value,

        })
    }

    getPass = (e) => {
        this.setState({

            password: e.target.value,

        })
    }

    loginRender() {
        return (
            <Form>
                <Form.Field>
                    <label>UserName</label>
                    <input placeholder='UserName' onChange={this.getUser} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' onChange={this.getPass} />
                    <small style={{ color: 'red' }}>{this.state.error}</small>
                </Form.Field>
                <Button type='submit' onClick={this.onLogin}>Login</Button>
            </Form>
        )
    }

    registerRender() {
        return (
            <Form>
                <Form.Field>
                    <label>UserName</label>
                    <input placeholder='UserName' onChange={this.getUser} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' onChange={this.getPass} />
                    <small style={{ color: 'red' }}>{this.state.error}</small>
                </Form.Field>
                <Button type='submit' onClick={this.onRegister}>Register</Button>
            </Form>
        )
    }

    render() {
        const panes = [
            { menuItem: 'Login', render: () => <Tab.Pane>{this.loginRender()}</Tab.Pane> },
            { menuItem: 'Register', render: () => <Tab.Pane>{this.registerRender()}</Tab.Pane> }
        ]
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width='eight'>
                    </Grid.Column>
                    <Grid.Column width='six'>
                        <Tab panes={panes} defaultActiveIndex={0} />

                    </Grid.Column>
                    <Grid.Column width='two'>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default LoginPage;