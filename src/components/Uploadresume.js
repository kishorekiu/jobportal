import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteResume, UploadOneResume } from "../slices/resumeSlice";

function Uploadresume() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userObj } = useSelector((state) => state.data);
  const { currentResumeStatus } = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [displayForm, setDisplayForm] = useState(true);
  const onFormSubmit = async (userOb) => {
    dispatch(UploadOneResume(userOb));
    alert("resume uploaded successfully");
    navigate("/userdashboard");
  };

  const handleDeleteResume = (userObj) => {
    dispatch(DeleteResume(userObj));
  };

  useEffect(() => {
    if (currentResumeStatus === "resume already uploaded") {
      setDisplayForm(false);
    } else {
      setDisplayForm(true);
    }
  }, [currentResumeStatus]);
  return (
    <div>
      <Col>
        {displayForm ? (
          <Row xs="1" sm="1" md="1" lg="2">
            <Col className="col-xs-4 col-sm-6 col-md-6 col-lg-4 mx-auto p-3 rounded light-grey-bg">
              <h1 className="fs-3 text-dark text-center ">Upload Resume</h1>
              <Form onSubmit={handleSubmit(onFormSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    className="shadow-none"
                    {...register("username", { required: true })}
                  />
                  {errors.username?.type === "required" && (
                    <p className="text-danger">please enter username</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="shadow-none"
                    {...register("email", { required: true })}
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-danger">please enter email</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    type="text"
                    className="shadow-none"
                    {...register("college", { required: true })}
                  />
                  {errors.college?.type === "required" && (
                    <p className="text-danger">please enter college name</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Education</Form.Label>
                  <br></br>
                  <Form.Check
                    inline
                    label="Bachelor's degree"
                    value="Bachelor's degree"
                    type="radio"
                    className="shadow-none"
                    {...register("education", { required: true })}
                  />
                  <Form.Check
                    inline
                    label="Master's degree"
                    value="Master's degree"
                    type="radio"
                    className="shadow-none"
                    {...register("education", { required: true })}
                  />
                  <Form.Check
                    inline
                    label="Intermediate/Diploma"
                    value="Intermediate/Diploma"
                    type="radio"
                    className="shadow-none"
                    {...register("education", { required: true })}
                  />
                  {errors.education?.type === "required" && (
                    <p className="text-danger">please check any one</p>
                  )}
                </Form.Group>{" "}
                <Form.Group className="mb-3">
                  <Form.Label>Skills</Form.Label>
                  <br></br>
                  <Form.Check
                    inline
                    label="Java"
                    value="java"
                    type="checkbox"
                    className="shadow-none"
                    {...register("skills", { required: true })}
                  />
                  <Form.Check
                    inline
                    label="Python"
                    value="python"
                    type="checkbox"
                    className="shadow-none"
                    {...register("skills", { required: true })}
                  />
                  <Form.Check
                    inline
                    label="Html"
                    value="html"
                    type="checkbox"
                    className="shadow-none"
                    {...register("skills", { required: true })}
                  />
                  <Form.Check
                    inline
                    label="JS"
                    value="js"
                    type="checkbox"
                    className="shadow-none"
                    {...register("skills", { required: true })}
                  />
                  <Form.Check
                    inline
                    label="React"
                    value="react"
                    type="checkbox"
                    className="shadow-none"
                    {...register("skills", { required: true })}
                  />
                  <Form.Check
                    inline
                    label="Angular"
                    value="angular"
                    type="checkbox"
                    className="shadow-none"
                    {...register("skills", { required: true })}
                  />
                  <Form.Check
                    inline
                    label="NodeJS"
                    value="nodejs"
                    type="checkbox"
                    className="shadow-none"
                    {...register("skills", { required: true })}
                  />
                  <Form.Check
                    inline
                    label="MongoDB"
                    value="mongodb"
                    type="checkbox"
                    className="shadow-none"
                    {...register("skills", { required: true })}
                  />
                  {errors.userType?.type === "required" && (
                    <p className="text-danger">please check any one</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Resume</Form.Label>
                  <Form.Control
                    type="file"
                    className="shadow-none"
                    {...register("resume", { required: true })}
                  />
                  {errors.resume?.type === "required" && (
                    <p className="text-danger">please upload resume</p>
                  )}
                </Form.Group>
                <Button type="submit" variant="dark" className="mb-3">
                  Upload
                </Button>
              </Form>
            </Col>
          </Row>
        ) : (
          <div className="d-flex flex-column justify-content-center">
            <p className="text-info fs-3 fw-bold text-center mb-3">
              Resume Already Uploaded
            </p>
            <Button
              variant="danger"
              className="mx-auto fit-content mb-3"
              onClick={() => handleDeleteResume(userObj)}
            >
              Delete Resume
            </Button>
          </div>
        )}
      </Col>

      <Button
        variant="dark"
        onClick={() => navigate("/userdashboard")}
        className="mt-3 mx-auto flex-center fit-content"
      >
        back to dashboard
      </Button>
    </div>
  );
}

export default Uploadresume;
