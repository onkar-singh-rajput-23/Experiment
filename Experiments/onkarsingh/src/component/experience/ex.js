import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ex.css"; // Import CSS file for additional styling

function Experience() {
  return (
    <Container className="experience-container">
      <h2>Experience</h2>

      <Row>
        <Col>
          <div className="experience-item">
            <h3>Management Secretary</h3>
            <p>
              <strong>Organization:</strong> 1⁄2 Kabaddi Club IITJ
              <br />
              <strong>Date:</strong> August 2022 – July 2023
              <br />
              <strong>Skills Used:</strong> Leadership, Communication,
              Management
              <br />
              <strong>Description:</strong> Held the position of Management
              Secretary where responsibilities included leadership,
              communication, and overall management of club activities.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="experience-item">
            <h3>Hackathon</h3>
            <p>
              <strong>Event:</strong> Prometeo IIT Jodhpur
              <br />
              <strong>Date:</strong> February 2023
              <br />
              <strong>Description:</strong> Participated in a hackathon, working
              on real-time problem statements to provide solutions.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
