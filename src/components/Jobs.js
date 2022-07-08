import { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
function Jobs({ jobs }) {
  let { userObj, isSuccess } = useSelector((state) => state.data);
  let [modalShow, setModalShow] = useState(false);
  let [openedJob, setOpenedJob] = useState({});

  let handleModal = (job) => {
    setModalShow(true);
    setOpenedJob(job);
  };

  let handleApplyNow = async (job) => {
    if (!isSuccess) {
      alert("please Login to apply");
    } else {
      let res = await axios
        .post("/user/applynow", { job: job, userObj: userObj })
        .then((res) => res.data);
      if (res.message === "success") {
        alert("Applied Successfully");
      } else {
        alert(res.message);
      }
    }
  };

  let handleAddToFavourite = async (job) => {
    if (!isSuccess) {
      alert("please Login to add to Favourite");
    } else {
      let res = await axios
        .post("/user/addtofavourite", {
          job: job,
          userObj: userObj,
        })
        .then((res) => res.data);
      if (res.message === "success") {
        alert("Added to Favourites");
      } else {
        alert(res.message);
      }
    }
  };

  return (
    <div className="container mt-3">
      <Row className="" xs="1" sm="1" md="2" lg="2">
        {jobs.map((job, index) => (
          <Col key={index} className="mb-3">
            <Card className="" bg="light">
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{job.jobTitle}</Card.Title>
                <Card.Text className="fw-light">
                  company: <span className="fw-normal">{job.companyName}</span>
                </Card.Text>
                <Card.Text className="fw-light">
                  location: <span className="fw-normal">{job.location}</span>
                </Card.Text>
                <Card.Text className="fw-light">
                  salary: <span className="fw-normal">{job.salary}</span>
                </Card.Text>
                {job.resume === "true" ? (
                  <div className="d-flex mb-3">
                    <i className="fa-solid fa-user pt-1" />
                    <Card.Text className="px-2">
                      Apply securely with resume
                    </Card.Text>
                  </div>
                ) : (
                  <div className="d-flex mb-3">
                    <i className="fa-solid fa-file pt-1" />
                    <Card.Text className="px-2">
                      Easily apply to this job without a resume
                    </Card.Text>
                  </div>
                )}
                <Button variant="dark" onClick={() => handleModal(job)}>
                  read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="me-auto">{openedJob.jobTitle}</Modal.Title>
          <Button
            variant="info"
            className="fw-bold"
            onClick={() => handleApplyNow(openedJob)}
          >
            Apply now
          </Button>
          <span>&nbsp;&nbsp; </span>{" "}
          <Button
            variant="none"
            className="border border-dark"
            onClick={() => handleAddToFavourite(openedJob)}
          >
            ❤
          </Button>
        </Modal.Header>
        <Modal.Body className="">
          <Row xs="1" sm="1" md="1" lg="2">
            <Col>
              <p className="fw-light">
                company:{" "}
                <span className="fw-normal">{openedJob.companyName}</span>
              </p>
              <p className="fw-light">
                location:{" "}
                <span className="fw-normal">{openedJob.location}</span>
              </p>
              <p className="fw-light">
                education:{" "}
                <span className="fw-normal">{openedJob.education}</span>
              </p>
              <p className="fw-light">
                job type: <span className="fw-normal">{openedJob.jobType}</span>
              </p>
              <p className="fw-light">
                salary: <span className="fw-normal">{openedJob.salary}</span>
              </p>
              <p className="fw-light">
                experience:{" "}
                <span className="fw-normal">{openedJob.experience}</span>
              </p>
            </Col>
            <Col>
              <p className="fw-light">short description</p>
              <p>{openedJob.shortDescription}</p>
              <p className="fw-light">long description</p>
              <p>{openedJob.longDescription}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Jobs;
