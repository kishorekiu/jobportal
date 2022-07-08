import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import interview from "../images/interview.svg";
function RecruiterDashboard() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column">
      <div className="container margin-y-lg">
        <Row
          xs="1"
          sm="1"
          md="2"
          lg="2"
          className="d-flex align-items-center justify-content-center mx-auto"
        >
          <Col className="d-flex flex-column">
            <h1 className="display-3 fw-normal mb-5">
              Let's make your next great hire. Fast.
            </h1>
            <Button
              variant="dark"
              className="nav-link text-white shadow-none"
              style={{ width: "fit-content" }}
              onClick={() => navigate("/resumes")}
            >
              View Resumes
            </Button>
          </Col>
          <Col className="d-flex align-items-center justify-content-center mx-auto">
            <img src={interview} alt="interview" className="d-block svg-md" />
          </Col>
        </Row>
      </div>
      <div className="container margin-y-lg">
        <Row xs="1" sm="1" md="2" lg="3" className="">
          <Col className="">
            <Card className="px-3 py-4 border-radius-2">
              <Card.Body>
                <Card.Title className="text-primary fw-bold mb-3">1</Card.Title>
                <Card.Text className="fw-bold fs-3 mb-3 lh-1">
                  Create your <br></br>free account
                </Card.Text>
                <Card.Text>
                  All you need is your email address to create an account and
                  start building your job post.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="px-3 py-4 border-radius-2">
              <Card.Body>
                <Card.Title className="text-primary fw-bold mb-3">2</Card.Title>
                <Card.Text className="fw-bold fs-3 mb-3 lh-1">
                  Build your <br></br>job post
                </Card.Text>
                <Card.Text>
                  Then just add a title, description, and location to your job
                  post, and you're ready to go.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="px-3 py-4 border-radius-2">
              <Card.Body>
                <Card.Title className="text-primary fw-bold mb-3">3</Card.Title>
                <Card.Text className="fw-bold fs-3 mb-3 lh-1">
                  Post <br></br>your job
                </Card.Text>
                <Card.Text>
                  After you post your job use our state of the art tools to help
                  you find dream talent.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
