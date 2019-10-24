import React, { Component } from "react";
import profilePic from "../images/construction.png";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import "./userpage.css";

/* 
  The static user, we are going to make a 
  generic page that will accept any user.
*/
const user = {
  name: "Jessica Smith",
  summary: "Young studious coder, graduate of MakeGamesWithUs",
  img: profilePic,
  rank: "QueenBee",
  badges: [
    { type: "stem", name: "Ecology" },
    { type: "stem", name: "Chemistry" }
  ]
};
/*
  We can use a functional component since 
  we are not using React Lifecycle Methods (like componentDidMount)
  or state.
*/
const userpage = () => {
  return (
    <div className="user">
      <Container>
        <Row className="profile">
          <Col>
            <Image src={user.img} height={150} roundedCircle />
          </Col>
          <Col className="name">
            <p>{user.name}</p>
            <p>{user.rank}</p>
            <p>{user.summary}</p>
          </Col>
        </Row>
        <Row className="logistics">
          <Col>
            <Row>
              <Col></Col>
            </Row>
            # of Badges
          </Col>
          <Col># of Workshops</Col>
        </Row>
      </Container>
    </div>
  );
};

export default userpage;
