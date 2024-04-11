import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./ed.css"; // Import CSS file for additional styling

function Ed() {
  return (
    <Container className="education-container justify-content-center">
      <h2>Education</h2>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <strong>Indian Institute of Technology Jodhpur</strong> (2021 -
          Present)
          <br />
          Bioscience and Bioengineering
          <br />
          CGPA up to 4th sem: 6.47
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>
            Onkareswar Saraswati Vidya Niketan, Jawahar Nagar, Kanpur Nagar
          </strong>
          (2020)
          <br />
          Board of Intermediate Examination, U.P. Board
          <br />
          Percentage: 83
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Sarawati Vidya Mandir Inter Collage, Hamirpur</strong> (2018)
          <br />
          Board of High School Examination, U.P. Board
          <br />
          Percentage: 81
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Ed;
