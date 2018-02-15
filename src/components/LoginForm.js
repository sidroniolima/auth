import React, { Component } from 'react';
import { Input } from './common';
import { Card, CardSection, Button } from './common';

class LoginForm extends Component
{
  state = { email: '', password: ''};

  render()
  {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="user@gmail.com"
            value={ this.state.email }
            onChangeText={ email => this.setState({ email: email }) }/>
        </CardSection>
        
        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="password"
            value={ this.state.password }
            onChangeText={ password => this.setState({ password }) }/>
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }

}

export default LoginForm;