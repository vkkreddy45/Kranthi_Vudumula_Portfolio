import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import k from "../assets/img/k.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <div className="logo">
              <img className="sj" src={k} alt="Hello viewer!!" />
              &nbsp;
              <h1>Kranthi</h1>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
