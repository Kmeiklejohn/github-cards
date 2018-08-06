import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Card } from '../node_modules/semantic-ui-react';

class App extends Component {
  state = { users: {},
            active: false,
            toggle: true,
  }
  handleClick = () => {
      fetch(`https://api.github.com/users/Kmeiklejohn`)
        .then(response => response.json())
        .then(data => {
          if(this.state.toggle){
          this.setState({users:data});
          this.setState({toggle:false});
          }
          this.state.active ?
          this.setState({active:false}):
          this.setState({active:true});
        })
  }
  render() {
    return (
      this.state.active ?
      (<div className="App">
          <button className="ui button" onClick={this.handleClick}>Toggle Me</button>
      <Card>
      <Card.Content>
              <img className="ui medium image" src={this.state.users.avatar_url} 
              alt={this.state.users.name}/>
              <Card.Header>Username: {this.state.users.login}</Card.Header>
              <Card.Description>Name: {this.state.users.name}</Card.Description>
              <Card.Description>Bio: {this.state.users.bio}</Card.Description>
              </Card.Content>
            </Card>
            </div>
            ):
            (<div className="App">
              <button className="ui button" onClick={this.handleClick}>Toggle Me</button>
             </div>)
    )
  }
}
export default App;
