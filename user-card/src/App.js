import React from 'react';
import axios from 'axios';
import UserCard from './components/usercard';

import './App.css';

class App extends React.Component {
  state = {
    coders: []
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/users/Psage23')
    .then(response => {
      console.log(response);
      this.setState({coders: response.data})
    })
  }

  componentDidUpdate() {

  }

  render() {
    console.log('render is working')
    return (
      <div className = "App">
        <h1>Best GitHub Users</h1>
        {/* <div class="container">
            <div className="header">
            <img src={lambdalogo} alt="Lambda Logo"/>
            <span role="img" aria-label="heart">❤️'s</span>
            <img src="./public/githublogo.png" alt="GitHub Logo" />
        </div>
        <div class="cards"></div>
        </div> */}
        <div className = "profile-cards">
          <UserCard />
        </div>
      </div>
    )
  }
}

export default App;
