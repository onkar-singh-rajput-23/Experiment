import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "./onkar.css";

function BlogCont() {
  return (
    <Container className="blogcont">
      <Row className="justify-content-center">
        <Col>
          <Image
            src="https://th.bing.com/th/id/R.9e2a8ec28c1d02fbb66094428676b6b9?rik=IJAWAyLq5fsStw&pid=ImgRaw&r=0"
            fluid
            className="im"
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <p> This singh the onkar singh blog </p>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogCont;
