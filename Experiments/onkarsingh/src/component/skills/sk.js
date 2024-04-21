import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./sk.css"; // Import CSS file for additional styling

const Sk = () => {
  return (
    <Container className="skills-container">
      <Row>
        <Col>
          <div>
            <h2>Skills</h2>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>Languages:</h3>
                <ul>
                  <li>C</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Python Libraries:</h3>
                <ul>
                  <li>pandas</li>
                  <li>sklearn</li>
                  <li>numpy</li>
                  <li>opencv</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Developer Tools:</h3>
                <ul>
                  <li>Git/Github</li>
                  <li>AutoCAD</li>
                  <li>Unity 3D</li>
                  <li>VScode</li>
                  <li>Colab Notebook</li>
                  <li>Blender</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Frameworks:</h3>
                <ul>
                  <li>FastAPI</li>
                  <li>Django</li>
                  <li>React</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Cloud/Databases:</h3>
                <ul>
                  <li>PGadmin4</li>
                  <li>PostgreSQL</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Soft Skills:</h3>
                <ul>
                  <li>Teamwork</li>
                  <li>Leadership</li>
                  <li>Management</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>
            <h2>Coursework</h2>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>Institute:</h3>
                <ul>
                  <li>Machine Learning</li>
                  <li>Basics of Deep Learning</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Probability, Statistics, and Stochastic Process</li>
                  <li>Signals and Systems</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>From Other Platforms:</h3>
                <ul>
                  <li>HTML (Udemy)</li>
                  <li>CSS (Udemy)</li>
                  <li>Javascript (Udemy)</li>
                  <li>Django (Udemy)</li>
                  <li>Basics of Deep Learning (Deep Learning.Ai)</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sk;
