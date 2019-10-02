/*eslint-env es_modules */
/*globals render */
//hey
import React, { Component } from "react";
import logo from "./images/brands/logo.png";
import "./GetInvolved.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { SocialIcon } from "react-social-icons";

const url =
  "https://zahncenternyc.us20.list-manage.com/subscribe/post?u=ff115085e7ead3a218772fa6d&amp;id=ab06e9c1cc";
class GetInvolved extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: ""
    }
    //this.handleChange = this.handleChange(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = e => {
    this.setState({ subject: e.target.value });
  }
  
   async handleSubmit(e) {
       e.preventDefault()
    const { name, email, subject } = this.state;
  };
  render() {
    const { email, subject } = this.state;
    const isEnabled = subject.length > 20;
    return (
      <div className="GetInvolved">
        <div className="Social">
          <h1>Follow us on Social Media!</h1>
          <div className="row">
            <SocialIcon
              url="https://www.facebook.com/stemhivenyc/"
              style={{ height: 200, width: 100 }}
              bgColor="#ffde00"
              fgColor="#ffffff"
            />
            <SocialIcon
              url="https://twitter.com/stemhivenyc"
              style={{ height: 200, width: 100 }}
              bgColor="#ffde00"
              fgColor="#ffffff"
            />
            <SocialIcon
              url="https://www.linkedin.com/company/stemhive"
              style={{ height: 200, width: 100 }}
              bgColor="#ffde00"
              fgColor="#ffffff"
            />
            <SocialIcon
              url="https://www.instagram.com/stemhivenyc/"
              style={{ height: 200, width: 100 }}
              bgColor="#ffde00"
              fgColor="#ffffff"
            />
          </div>
        </div>
        <div className="Sub-Form">
          <h1>Subscribe to our Newsletter!</h1>
          <p>
            Receive updates and latest news directly from our team. Enter your
            email below:{" "}
          </p>
          <MailchimpSubscribe url={url} />
        </div>
        <div className="Mentor">
          <p>
            Interested in becoming part of the Hive? Become a mentor, Click the
            link below!{" "}
          </p>
          <a
            className="App-Sign"
            href="https://docs.google.com/forms/d/e/1FAIpQLSftP2otbju_aM3_h99AnSSvlQXR2HA1Y46j28JOlgV1K4Exng/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Stem Hive
          </a>
        </div>
        <div className="Contact">
          <form onSubmit={this.handleSubmit}>
            <h1>Contact Us</h1>

            <label>Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="John S."
              //onChange={this.handleChange}
              required
            />

            <br />
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              //placeholder="contact@email.com"
              onChange={this.handleChange}
            />

            <br />
            <label>Subject</label>
            <br />
            <textarea
              id="subject"
              name="subject"
              placeholder="Tell us something.."
              rows="5"
              value={this.state.subject}
              //onChange={this.handleChange}
              required
            />

            <br />
            <font size="1" color="red">
              *Subject must have 20 characters or more.
            </font>

            <br />
            <input type="submit" value="Submit" disabled={!isEnabled} />
          </form>
        </div>
      </div>
    );
  }
}

export default GetInvolved;
