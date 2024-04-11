import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./pcard.css"; // Import CSS file for additional styling

function Pcard() {
  return (
    <Container className="projects-container">
      <Row className="g-1">
        <Col>
          <Card className="project-card">
            <Card.Body>
              <Card.Title>Spam mail detection</Card.Title>
              <Card.Text>
                <strong>Date:</strong> 15 July 2023 - Present
                <br />
                <strong>Type:</strong> Self Project
                <br />
                <strong>Tools Used:</strong> Colab Notebook, VScode
                <br />
                <strong>Technologies Used:</strong> Data Preprocessing, Logistic
                Regression, Support Vector Machine, Decision Tree
                <br />
                <strong>Description:</strong> Individual project utilizing data
                from Kaggle for early detection of Alzheimer’s through
                preprocessing and cleaning techniques.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pcard;
