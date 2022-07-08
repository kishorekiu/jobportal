import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import { useNavigate } from "react-router-dom";
import resumefile from "../resume.pdf";
function Resumes() {
  let [resumes, setResumes] = useState([]);
  let [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  let handleModal = () => {
    setModalShow(true);
  };
  useEffect(() => {
    const getResumes = async () => {
      const response = await axios
        .get("/user/get-resumes")
        .then((res) => res.data);
      if (response.message === "success") {
        setResumes(response.resumes);
      }
    };
    getResumes();
  }, []);
  return (
    <div className="container mt-3">
      <h1 className="text-center flex-center fw-4 mb-3">Resumes</h1>
      <Row className="" xs="1" sm="1" md="2" lg="2">
        {resumes.map((resume, index) => (
          <Col key={index} className="mb-3">
            <Card className="" bg="light">
              <Card.Body>
                <Card.Title>{resume.username}</Card.Title>
                <Card.Text className="fw-light">
                  college: <span className="fw-normal">{resume.college}</span>
                </Card.Text>
                <Card.Text className="fw-light">
                  education:{" "}
                  <span className="fw-normal">{resume.education}</span>
                </Card.Text>
                <Card.Text className="fw-light">
                  skills:{" "}
                  <span className="fw-normal">
                    {resume.skills.map((skill) => (
                      <span>{skill}, </span>
                    ))}
                  </span>
                </Card.Text>
                <Card.Text className="fw-light">
                  email: <span className="fw-normal">{resume.email}</span>
                </Card.Text>
                <Button variant="dark" onClick={handleModal}>
                  View Resume
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="me-auto">Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          <Document file={resumefile} options={{ workerSrc: "/pdf.worker.js" }}>
            <Page pageNumber={1} />
          </Document>
        </Modal.Body>
      </Modal>
      <Button
        variant="dark"
        onClick={() => navigate("/recruiterdashboard")}
        className="mt-3 mx-auto flex-center fit-content"
      >
        back to dashboard
      </Button>
    </div>
  );
}

export default Resumes;
