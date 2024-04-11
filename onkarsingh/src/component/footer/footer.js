import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function Footer() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col md = "auto">
            <h1>Onkar Singh Rajput</h1>
            <p>Know about Onkar singh Rajput</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>Contact</h2>
            <ul>
              <li>
                Email: me@diogotc.com
              </li>
              <li>
                Discord: diogocorrela
              </li>
              <li>
                Matrix: @dte:diogoto.com
              </li>
              <li>
                Mastodon: @dtc@masto.pt
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h2>Site Map</h2>
            <ul>
              <li>
                Home
              </li>
              <li>
                Blog
              </li>
              <li>
                Impossible List
              </li>
              <li>
                CV
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <footer className="text-center py-3">
        ©Onkar singh rajput web profile code
      </footer>
    </div>
  );
}

export default Footer;
