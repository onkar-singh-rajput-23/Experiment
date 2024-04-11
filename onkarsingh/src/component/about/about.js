// import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import "./about";

// function About() {
//   return (
//     <div className="about">
//       <Container className="justify-content-center">
//         <Row>
//           <Image
//             src="profile-picture.jpg"
//             alt="Diogo Correia Profile Picture"
//             className="profile-pic"
//           />
//         </Row>
//         <Row>
//           <h2 className="about-text">Diogo Correia</h2>
//           <p className="about-text">Student, Developer & Runner</p>
//         </Row>
//         <Row className="justify-content-center">
//           <Col className="social-link">
//             <a href="#Instal">Instal</a>
//           </Col>
//           <Col className="social-link">
//             <a href="#Linkedin">Linkedin</a>
//           </Col>
//           <Col className="social-link">
//             <a href="#Github">Github</a>
//           </Col>
//           <Col className="social-link">
//             <a href="#facebook">Facebook</a>
//           </Col>
//           <Col className="social-link">
//             <a href="#Kaggle">Kaggle</a>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default About;
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./about.css";
function About() {
  return (
    <div className="about">
      <Container className="text-center py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Image
              src="https://cdn.photographylife.com/wp-content/uploads/2017/08/Nikon-D850-Sample-Image-2.jpg"
              alt="Diogo Correia Profile Picture"
              height="200"
              width="200"
              className="rounded-circle"
            />
          </Col>
        </Row>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h2>Diogo Correia</h2>
              <p>Student, Developer & Runner</p>
            </Col>
          </Row>
          <Row xs={12} md={6} className="justify-content-center">
            <Col xs={2} className="social-link mb-2">
              <a href="#Instal">Instal</a>
            </Col>
            <Col xs={2} className="social-link mb-2">
              <a href="#Linkedin">Linkedin</a>
            </Col>
            <Col xs={2} className="social-link mb-2">
              <a href="#Github">Github</a>
            </Col>
            <Col xs={2} className="social-link mb-2">
              <a href="#Facebook">Facebook</a>
            </Col>
            <Col xs={2} className="social-link mb-2">
              <a href="#Kaggle">Kaggle</a>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default About;
