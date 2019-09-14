import React, { Component } from "react";
import cover from "../images/cover.svg";
import fifthTest from "./../images/emblems/userEmblems/academic/project(fifth).png";
import firstTest from "./../images/emblems/userEmblems/academic/project(first).png";
import biodiversity from "./../images/emblems/biodiversity.svg";
import emblems from "./emblemAll";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "react-bootstrap";

const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: true,
  defaultCountryCode: "1",
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string"
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password"
    },
    {
      label: "PhoneNumber",
      key: "phone_number",
      required: true,
      displayOrder: 3,
      type: "string"
    },
    {
      label: "Are you an Facillitator or Student?",
      key: "custom_attr",
      required: true,
      displayOrder: 4,
      type: "string",
      custom: true
    }
  ]
};

class userpage extends Component {
  state = {
    emblemList: [
      {
        emblemType: "Academic",
        enabled: true,
        display: { firstTest },
        id: 1

        // .. other properties
      },
      {
        emblemType: "Academic",
        enabled: false,
        display: { fifthTest },
        id: 2
        // .. other properties
      }
    ]
  };
  render() {
    return (
      <div className="UserPage">
        <div className="welcome">
          <h1>Welcome Carolina</h1>
        </div>

        <Container>
          <Row className="top">
            <Col className="emblem">
              <div className="images">
                <img src={biodiversity} alt="biodiversity" />
              </div>
              {/* style={"width:50%; height:50%;"} */}
              <ProgressBar animated now={60} className="ProgressBar" />
            </Col>

            <Col className="workshops">
              <h3 className="title1">
                <b>
                  <u>Learning About Biodiversity</u>
                </b>
              </h3>
              <ul>
                <Button className="classes">Introduction</Button>
                <Button className="classes"> Scavenger Hunt</Button>
                <Button className="classes">Analyze Findings</Button>
                <Button className="classes">DYI Ecosystem</Button>
                <Button className="classes">Presentations</Button>
              </ul>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="lists">
            <Col className="accomplishments">
              <h3>
                <b>
                  <u>Accomplishments</u>
                </b>
              </h3>
              <ul>
                <div className="list">
                  <p>Introduction</p>

                  <p>Scavenger Hunt</p>
                  <p>Analyze Findings</p>
                </div>
              </ul>
            </Col>
            <Col className="steps">
              <h3>
                <b>
                  <u>Next Steps</u>
                </b>
              </h3>
              <ul>
                <div className="list">
                  {" "}
                  <p>DYI Ecosystem</p>
                  <p>Presentations</p>
                </div>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// export default withAuthenticator(userpage, { signUpConfig });
export default userpage;
