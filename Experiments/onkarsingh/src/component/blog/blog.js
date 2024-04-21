// blogc.jsx
import React from "react";
import Blog from "./container/container";
import { Row, Col } from "react-bootstrap";
import "./blog.css";

function Blogc() {
  return (
    <div className="blog-container">
      <div className="aboutp">
        <p className="t">
          <h6>About</h6>
          <h6>education</h6>
          <h6>skill</h6>
          <h6>work</h6>
          <h6>experience</h6>
          <h6>achivement</h6>
        </p>
      </div>

      <Row noGutters className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Blog />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Blog />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Blog />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Blog />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Blog />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Blog />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Blog />
        </Col>
      </Row>
    </div>
  );
}

export default Blogc;
