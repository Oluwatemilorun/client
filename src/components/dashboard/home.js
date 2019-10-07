import React, { Component } from "react";
import axios from "axios";

class home extends Component {
  state = {
    devices: null
  };
  componentDidMount() {
    axios
      .get("/devices")
      .then(res => {
        console.log(res.data);
        this.setState({
          devices: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default home;
