import React from 'react';
import axios from 'axios';
import FollowerCards from './components/FollowerCard'

import './App.css';

class App extends React.Component {
  state = {
    profile: {},
    followers: []
  };
  
  componentDidMount() {
    axios.get('https://api.github.com/users/Psage23')
    .then(response => {
      console.log(response);
      this.setState({profile: response.data})
    })

    axios.get(`https://api.github.com/users/Psage23/followers`)
    .then(response => {
      console.log(response.data);
      this.setState({followers: response.data})
    })
  }

  render() {
    console.log('render is working')
    return (
      <div className = "App">
        <h1>Best GitHub Users</h1>
        <div className = "name">
          {this.state.profile.name}
        </div>
        <h3>{this.state.profile.bio}</h3>
        <img className="logo" src={this.state.profile.avatar_url} alt="profile picture" />
        <p>Followers: {this.state.profile.followers}</p>
        <p>Following: {this.state.profile.following}</p>
        <div>
        {/* {this.state.followers.map(x => {
          return (
          <div><img src={x.avatar_url} />
          <p>{x.login}</p>
          </div>
          )
        })
        } */}
        <FollowerCards followers={this.state.followers} />
        </div>
      </div>
    )
    
  }
}

export default App;

