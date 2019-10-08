import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getDevices } from "../../store/actions/device";

class home extends Component {
  componentWillMount() {
    this.props.getDevices();
  }
  render() {
    console.log(this.props.devices);
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

//set the propTypes
// eslint-disable-next-line react/no-typos
home.PropTypes = {
  getDevices: PropTypes.func.isRequired,
  devices: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  devices: state.device.devices //state.reducername from rootreducer. what type of returm from that reducer
});

export default connect(
  mapStateToProps,
  { getDevices }
)(home);
