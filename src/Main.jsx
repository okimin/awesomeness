import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./main.css";

import team2 from "./images/team/hexDaniel.png";
import emblems from "./images/solutions/emblems.png";
import mentoring from "./images/solutions/mentoring.png";
import workshops from "./images/solutions/workshops.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <div className="welcome">
        <h1>
          <b>Welcome To Our Hive Community</b>
        </h1>
        <Link to="/idRoles">
          <Button>Click To Get Started</Button>
        </Link>
      </div>
      <div className="problem">
        <h2>
          <u>
            <b>Problem</b>
          </u>
        </h2>
        <img src={team2} className="wrap-pic" alt="place holder" />
        <p className="problem-text">
          Less than 11% of women of color pursue a STEM-based bachelor degree
          out of 50% of women in the United States. In our customer discovery,
          we found out that 81% of girls can’t even name a female role model in
          stem. According to Microsoft, girls from the ages 9 - 15 gained an
          interest in STEM, but when it is time to go college, they choose not
          to make STEM their first choice for picking a major
        </p>
      </div>
      <div className="mission">
        <h2>
          <u>
            <b>Mission</b>
          </u>
        </h2>
        <div className="mission-pic">
          <img src={team2} className="wrap-pic" alt="place holder" />
        </div>
        <p className="mission-text">
          STEMHIVE strives to engage and retain interest to low-income middle
          schoolers in STEM by giving them motivation, confidence, and
          incentives to pursue a STEM-based degree in college, all in order to
          further increase women representation in related fields.
        </p>
      </div>
      <div className="solutions">
        <h2>
          <u>
            <b>The Solution</b>
          </u>
        </h2>
        <div id="Solution-pic">
          <Container className="conatiner-solution">
            <Row>
              <Col>
                <img src={emblems} className="place-holder" alt="emblems" />
              </Col>
              <Col>
                <img src={workshops} className="place-holder" alt="workshops" />
              </Col>
              <Col>
                <img src={mentoring} className="place-holder" alt="mentoring" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="title1">
                  <b>Emblems</b>
                </p>
              </Col>
              <Col>
                <p className="title1">
                  <b>Workshops</b>
                </p>
              </Col>
              <Col>
                <p className="title1">
                  <b>Mentoring</b>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="solution-explain">
        <Container className="align-container">
          <div className="yellow-cards">
            <p className="title">
              <b>Mentoring</b>
            </p>
            <Row className="colorRow">
              <Col xs={3}>
                <img src={mentoring} className="solution-pic" alt="Mentoring" />
              </Col>
              <Col>
                <p className="explain-text">
                  We want to provide a middle school student with a local high
                  school role model to give her new perspectives and insights to
                  act on her interests in STEM.
                </p>
              </Col>
            </Row>
          </div>
          <div className="yellow-cards">
            <p className="title">
              <b>Workshops</b>
            </p>
            <Row className="colorRow">
              <Col xs={3}>
                <img src={workshops} className="solution-pic" alt="Workshops" />
              </Col>
              <Col>
                <p className="explain-text">
                  Girls will take part in a project based curriculum, where they
                  learn real skills that they can apply to their future careers.
                </p>
              </Col>
            </Row>
          </div>
          <div className="yellow-cards">
            <p className="title">
              <b>Emblems</b>
            </p>
            <Row className="colorRow">
              <Col xs={3}>
                <img src={emblems} className="solution-pic" alt="Emblems" />
              </Col>
              <Col>
                <p className="explain-text">
                  In a gamified experience, girls will be awarded rewards for
                  going through workshops and certain tasks. These awards
                  include museum tickets, opportunities to go on exclusive
                  tours, and internships with sponsored companies.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="stats">
        <h2>
          <u>
            <b>Stats</b>
          </u>
        </h2>
        <img src={team2} alt="place holder" className="stats-place-holder" />
        <p className="stats-text">mprehensam scripserit eos ei. Fugit laudem</p>
      </div>
    </div>
  );
}
export default Main;
