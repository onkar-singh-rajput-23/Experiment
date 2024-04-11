import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./ao.css"; // Import CSS file for additional styling

function Aoi() {
  return (
    <Container className="aoi-container">
      <h2>Areas of Interest</h2>
      <ListGroup className="aoi-list">
        <ListGroup.Item>Software Developer</ListGroup.Item>
        <ListGroup.Item>Machine Learning Engineer</ListGroup.Item>
        <ListGroup.Item>Web Development</ListGroup.Item>
        <ListGroup.Item>Research</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Aoi;
