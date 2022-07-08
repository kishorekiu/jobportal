import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Row xs="1" sm="2" md="3" lg="4" className="light-grey-bg p-4">
        <Col className="d-flex justify-content-center mb-5">
          <div className="d-flex flex-column">
            <h1 className="fs-4 fw-normal mb-3 flex-center">
              We're here to help
            </h1>
            <div className="flex-center flex-column">
              <Button
                variant="dark"
                className="fs-6 p-2 text-white flex-center mb-3"
              >
                HelpCenter
              </Button>
              <Button
                variant="dark"
                className="fs-6 p-2 text-white flex-center"
              >
                ContactSupport
              </Button>
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-center mb-5">
          <div className="d-flex flex-row flex-sm-column">
            <h1 className="fs-4 fw-normal flex-center mb-3">Job Portal</h1>
            <Navbar className="" expand="sm">
              <Container className="d-flex flex-column flex-sm-row">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="fs-4 fw-normal d-flex flex-column mt-3">
                    <Link to className="fs-6 nav-link flex-center">
                      Why Job Portal
                    </Link>
                    <Link to className="fs-6 nav-link flex-center">
                      Contact us
                    </Link>
                    <Link to className="fs-6 nav-link flex-center">
                      Cookies
                    </Link>
                    <Link to className="fs-6 nav-link flex-center">
                      Privacy center
                    </Link>
                    <Link to className="fs-6 nav-link flex-center">
                      Sitemap
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Col>
        <Col className="d-flex justify-content-center mb-5">
          <div className="d-flex flex-row flex-sm-column">
            <h1 className="fs-4 fw-normal flex-center mb-3">Solutions</h1>
            <Navbar className="" expand="sm">
              <Container className="d-flex flex-column flex-sm-row">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="fs-4 fw-normal d-flex flex-column mt-3">
                    <Link to className="fs-6 nav-link flex-center">
                      All products
                    </Link>
                    <Link to className="fs-6 nav-link flex-center">
                      Resume
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Col>
        <Col className="d-flex justify-content-center mb-5">
          <div className="d-flex flex-row flex-sm-column">
            <h1 className="fs-4 fw-normal flex-center mb-3">Resources</h1>
            <Navbar className="" expand="sm">
              <Container className="d-flex flex-column flex-sm-row">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="fs-4 fw-normal d-flex flex-column mt-3">
                    <Link to className="fs-6 nav-link flex-center">
                      How it works
                    </Link>
                    <Link to className="fs-6 nav-link flex-center">
                      FAQ
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Col>
      </Row>
      <Row xs="1" sm="1" md="2" lg="2" className="p-4 mx-5">
        <Col className="flex-center mb-5 mb-sm-0 ">
          <p className="flex-center">&#169; 2022 Job Portal</p>
        </Col>
        <Col className="flex-center">
          <div className="d-flex">
            <i className="fa-brands fa-2x fa-facebook">&nbsp;</i>
            <i className="fa-brands fa-2x fa-instagram">&nbsp;</i>
            <i className="fa-brands fa-2x fa-youtube">&nbsp;</i>
            <i className="fa-brands fa-2x fa-whatsapp">&nbsp;</i>
            <i className="fa-brands fa-2x fa-twitter">&nbsp;</i>
            <i className="fa-brands fa-2x fa-github ">&nbsp;</i>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
