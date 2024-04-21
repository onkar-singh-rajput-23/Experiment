import React from "react";
import Pcard from "./projectcard/pcard";
import { Container, Row, Col } from "react-bootstrap";

function Pr() {
  const pcardsData = [
    { prop1: "value1", prop2: "value1" }, // Props for the first Pcard
    { prop1: "value2", prop2: "value2" }, // Props for the second Pcard
    // { prop1: "value3", prop2: "value3" }, // Props for the third Pcard
  ];
  return (
    <Container>
      <Row className="justify-content-center">
        <h2>Projects</h2>
      </Row>
      <Row noGutters>
        {pcardsData.map((data, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Pcard {...data} />
          </Col>
        ))}
        <Col xs={12} md={6} lg={4}>
          <Pcard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Pcard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Pcard />
        </Col>
      </Row>
    </Container>
  );
}

export default Pr;
