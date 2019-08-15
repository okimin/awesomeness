import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./TeamPage.css";
//import { Helmet } from "react-helmet";
import team1 from "./images/team/image1.jpg";
import team2 from "./images/team/image5.jpg";
import team3 from "./images/team/image6.jpg";
import champion1 from "./images/champions/image2.png";
import champion2 from "./images/champions/image3.jpg";
import champion3 from "./images/champions/image4.jpg";
import champion4 from "./images/champions/image7.jpg";
import champion5 from "./images/champions/image8.jpg";

function TeamPage() {
  return (
    <div className="Team">
      <header className="team-header">
        <div className="blue-cards">
          <h1>CHECK OUT OUR CO-FOUNDERS </h1>
          <Container>
            <Row>
              <Col>
                <img src={team1} className="team-pic" alt="Carolina" />
                <h2> Carolina Perez</h2>
              </Col>
              <Col>
                <img src={team2} className="team-pic" alt="Daniel" />
                <h2> Daniel Gaston</h2>
              </Col>
              <Col>
                <img src={team3} className="team-pic" alt="Karla" />
                <h2> Karla Jacome</h2>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="blue-cards">
          <h1>HERE ARE THE PEOPLE THAT SUPPORTED US</h1>

          <Container>
            <Row>
              <Col>
                <img src={champion1} className="champion-pic" alt="Marcel" />
                <h2>Marcel Malena</h2>
              </Col>
              <Col>
                <img src={champion2} className="champion-pic" alt="Natalie" />
                <h2>Natalie Bergeron</h2>
              </Col>
              <Col>
                <img
                  src={champion3}
                  className="champion-pic"
                  alt="Michelle Juarez"
                />
                <h2>Dr. Michelle Juarez</h2>
              </Col>
              <Col>
                <img
                  src={champion4}
                  className="champion-pic"
                  alt="Ms. Nkem Stanley"
                />
                <h2>Ms. Nkem Stanley</h2>
              </Col>
              <Col>
                <img
                  src={champion5}
                  className="champion-pic"
                  alt="Bruce Billig"
                />
                <h2>Bruce Billig</h2>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </div>
  );
}

export default TeamPage;
