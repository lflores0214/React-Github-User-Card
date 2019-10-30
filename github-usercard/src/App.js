import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers"
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
    console.log("constructor is running");
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/lflores0214`)
    .then(response => {
      console.log(response)
      this.setState({
        user: response.data,
      })
    })
    .catch(error => {
      console.log("ERROR",error)
    })

    axios
    .get(`https://api.github.com/users/lflores0214/followers`)
    .then(response => {
      console.log(response)
      this.setState({
        followers: response.data
      })
    })
  }
  

  render() {
    return (
      <div className="App">
        <UserCard
          avatar={this.state.user.avatar_url}
          name={this.state.user.name}
          username={this.state.user.login}
          location={this.state.user.location}
          url={this.state.user.html_url}
          followers={this.state.user.followers}
          following={this.state.user.following}
          bio={this.state.user.bio}
        />
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}
export default App;
