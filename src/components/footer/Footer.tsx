import "./Footer.scss";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { Col, Nav, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <h4>Contact us: </h4>
      <Row xs={1} md={2} lg={3} className="">
        <Col className="col">
          <Nav.Link href="https://www.facebook.com/svetlana.muratova.31149">
            <FaFacebook />
            Facebook
          </Nav.Link>
        </Col>
        <Col className="col">
          <Nav.Link href="https://www.linkedin.com/in/svetlana-muratov-659972261/">
            <FaLinkedin />
            LinkedIn
          </Nav.Link>
        </Col>
        <Col className="col">
          <Nav.Link href="https://instagram.com/svetlana.muratova.31149?igshid=ZDdkNTZiNTM=">
            <SiInstagram />
            Instagram
          </Nav.Link>
        </Col>
      </Row>
      {/* <h4>Our email address: </h4> */}
      <Row xs={1} md={2} lg={3} className="">
        <Col className="col">
          <Nav.Link href="mailto:svetlanamortov@gmail.com">
            svetlanamortov@gmail.com
          </Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col className="col">
          &copy;{new Date().getFullYear()} Copiright: {""}
          Muratov Svetlana
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
