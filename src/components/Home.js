import { Card, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import cognizant from "../images/cognizant.png";
// import infosys from "../images/infosys.png";
// import tcs from "../images/tcs.png";
// import bosch from "../images/bosch.png";
import home1 from "../images/home1.svg";
import jobs from "../images/jobs.svg";
import recruiter from "../images/recruiter1.svg";
function Home() {
  return (
    <div className="d-flex flex-column">
      <div className="container margin-y-lg overflow-hidden">
        <Row
          xs="1"
          sm="1"
          md="1"
          lg="2"
          className="d-flex align-items-center justify-content-center"
          style={{ height: "20rem" }}
        >
          <Col className=" fw-normal text-center large-text flex-center mb-xs-5 mb-sm-5 mb-md-5 mb-lg-0">
            Welcome To Job Portal
          </Col>
          <Col className="flex-center">
            <img src={home1} alt="welcome svg" className="svg-home1" />
          </Col>
        </Row>
      </div>
      <div className="container margin-y-lg overflow-hidden">
        <Row xs="1" sm="1" md="2" lg="2" className="">
          <Col className="flex-center">
            <img src={jobs} alt="jobs svg" className="svg-home1" />
          </Col>
          <Col className="flex-center">
            <Card className="text-center">
              <Card.Header>Are you a candidate?</Card.Header>
              <Card.Body className="">
                <Card.Title>Looking for Jobs</Card.Title>
                <Card.Text>
                  Sign-Up/ Sign-In to Apply for your favourite Jobs
                </Card.Text>
                <div className="flex-center">
                  <Nav className="mx-auto">
                    <NavLink
                      className="nav-link text-white bg-dark rounded dark-button"
                      to="/register"
                    >
                      Register
                    </NavLink>
                    <span>&nbsp;&nbsp;</span>
                    <NavLink
                      className="nav-link text-white bg-dark rounded dark-button"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </Nav>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                Post your Resume - It only takes few seconds
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container margin-y-lg overflow-hidden">
        <Row xs="1" sm="1" md="2" lg="2">
          <Col className="flex-center">
            <Card className="text-center">
              <Card.Header>Are you a recruiter?</Card.Header>
              <Card.Body>
                <Card.Title>Looking for Employees</Card.Title>
                <Card.Text>
                  Sign-Up/Sign-In to Recruit best candidates
                </Card.Text>
                <div className="flex-center">
                  <Nav className="mx-auto d-flex">
                    <NavLink
                      className="nav-link text-white bg-dark rounded dark-button"
                      to="/register"
                    >
                      Register
                    </NavLink>
                    <span>&nbsp;&nbsp;</span>
                    <NavLink
                      className="nav-link text-white bg-dark rounded dark-button"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </Nav>
                </div>
              </Card.Body>

              <Card.Footer className="text-muted">
                Post a job - Your next hire is here
              </Card.Footer>
            </Card>
          </Col>
          <Col className="flex-center">
            <img src={recruiter} alt="recruiter svg" className="svg-home1" />
          </Col>
        </Row>
      </div>
      <>
        {/* <div
        className="margin-y-lg overflow-hidden"
        style={{ overflow: "hidden" }}
      >
        <Row
          xs="1"
          sm="2"
          md="3"
          lg="4"
          className="d-flex justify-content-center"
        >
          <Col className="d-flex align-items-center justify-content-center p-0 g-0">
            <img
              alt="company logo"
              className="companyLogo infosys"
              src={infosys}
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-center p-0 g-0">
            <img alt="company logo" className="companyLogo" src={bosch} />
          </Col>
          <Col className="d-flex align-items-center justify-content-center p-0 g-0">
            <img alt="company logo" className="companyLogo" src={cognizant} />
          </Col>
          <Col className="d-flex align-items-center justify-content-center p-0 g-0">
            <img alt="company logo" className="companyLogo" src={tcs} />
          </Col>
        </Row>
      </div> */}
      </>
    </div>
  );
}

export default Home;
