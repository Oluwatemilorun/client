import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

//MUI km

const styles = {};

export class login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Login Page</h1>
      </div>
    
    );
  }
}
login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);
