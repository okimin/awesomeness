import  React from "react";
//import { Component} from "react";
//import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Register.css"

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }


  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
 	<FormGroup controlId="FirstName" bsSize="large">
          <FormLabel>First Name</FormLabel>
	  <FormControl
            autoFocus
            type="firstNamel"
	    placeholder="Enter your first name"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>

 	<FormGroup controlId="LastName" bsSize="large">
          <FormLabel>Last Name</FormLabel>
	  <FormControl
            autoFocus
            type="lastName"
	    placeholder="Enter your last name"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
	  <FormControl
            autoFocus
            type="email"
	    placeholder="Enter Email"
            value={this.state.email}
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
	
	<FormGroup controlId="Phone Number" bsSize="large">
	    <FormLabel>Phone Number</FormLabel>
            <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="CellNumber" 
	    placeholder="Enter Phone Number for contact"
          />
        </FormGroup>

	<FormGroup controlId="Favorite Subject" bsSize="large">
	    <FormLabel>Favorite Subject</FormLabel>
            <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="FavoriteSubject" 
	    placeholder="math, science, history, etc."
          />
        </FormGroup>
	
	<FormGroup controlId="School" bsSize="large">
	    <FormLabel>School</FormLabel>
            <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="School" 
	    placeholder="What school do you attend?"
          />
        </FormGroup>


	<FormGroup controlId="Grade" bsSize="large">
	    <FormLabel>Grade</FormLabel>
            <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="Grade" 
	    placeholder="Enter your year grade 6-12"
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
