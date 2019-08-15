import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


export default class studentRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentEmail: "",
      password: "",
      confirmPassword: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.parentEmail.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="Username" bsSize="large">
          <FormLabel>UserName</FormLabel>
          <FormControl
            autoFocus
            type="username"
            placeholder="Enter your first name"
            value={this.state.parentEmail}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="parentEmail" bsSize="large">
          <FormLabel>Parent's Email</FormLabel>
          <FormControl
            autoFocus
            type="parentEmail"
            placeholder="Enter parentEmail"
            value={this.state.parentEmail}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="passWord"
            placeholder="Enter Password"
          />
        </FormGroup>

        <FormGroup controlId="confirmPassword" bsSize="large">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="confirmpassword"
            placeholder="Re-enter Password"
          />
        </FormGroup>

        <Button
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="Sign Up"
        >
          Sign Up
        </Button>
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}
