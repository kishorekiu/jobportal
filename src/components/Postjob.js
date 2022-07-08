import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostOneJob } from "../slices/recruiterSlice";
function Postjob() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { jobStatus } = useSelector((state) => state.recruiter);
  console.log(jobStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFormSubmit = async (jobObj) => {
    console.log(jobObj);
    dispatch(PostOneJob(jobObj));
    alert("job posted successfully");
    navigate("/recruiterdashboard");
  };
  return (
    <div>
      <Row xs="1" sm="1" md="1" lg="2">
        <Col className="col-xs-4 col-sm-6 col-md-6 col-lg-4 mx-auto p-3 rounded light-grey-bg">
          <h3 className="fs-3 text-dark text-center mb-3">Post a Job</h3>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>JobTitle</Form.Label>
              <Form.Control
                type="text"
                className="shadow-none"
                {...register("jobTitle", { required: true })}
              />
              {errors.jobTitle?.type === "required" && (
                <p className="text-danger">please enter job title</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CompanyName</Form.Label>
              <Form.Control
                type="text"
                className="shadow-none"
                {...register("companyName", { required: true })}
              />
              {errors.companyName?.type === "required" && (
                <p className="text-danger">please enter companyName</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                className="bg-light fit-content"
                {...register("location")}
              >
                <option>select location</option>
                <option
                  name="location"
                  value="Bengaluru, Karnataka"
                  className=""
                >
                  Bengaluru, Karnataka
                </option>
                <option name="location" value="West Bengal" className="">
                  West Bengal
                </option>
                <option name="location" value="Jodhpur, Rajasthan" className="">
                  Jodhpur, Rajasthan
                </option>
                <option
                  name="location"
                  value="Mumbai, Maharashtra"
                  className=""
                >
                  Mumbai, Maharashtra
                </option>
                <option name="location" value="Remote" className="">
                  Remote
                </option>
                <option
                  name="location"
                  value="Hyderabad, Telangana"
                  className=""
                >
                  Hyderabad, Telangana
                </option>
                <option name="location" value="Pune, Maharashtra" className="">
                  Pune, Maharashtra
                </option>
                <option name="location" value="Gurgaon, Haryana" className="">
                  Gurgaon, Haryana
                </option>
                <option
                  name="location"
                  value="Thiruvananthapuram, Kerala"
                  className=""
                >
                  Thiruvananthapuram, Kerala
                </option>
                <option
                  name="location"
                  value="Lucknow, Uttar Pradesh"
                  className=""
                >
                  Lucknow, Uttar Pradesh
                </option>
                <option name="location" value="Calicut, Kerala" className="">
                  Calicut, Kerala
                </option>
                <option name="location" value="New Delhi, Delhi" className="">
                  New Delhi, Delhi
                </option>
                <option name="location" value="Delhi, Delhi" className="">
                  Delhi, Delhi
                </option>
                <option name="location" value="Surat, Gujarat" className="">
                  Surat, Gujarat
                </option>
                <option
                  name="location"
                  value="Tirunelveli, Tamil Nadu"
                  className=""
                >
                  Tirunelveli, Tamil Nadu
                </option>
                <option name="location" value="India" className="">
                  India
                </option>
                <option
                  name="location"
                  value="Raipur, Chhattisgarh"
                  className=""
                >
                  Raipur, Chhattisgarh
                </option>
                <option name="location" value="Mohali, Punjab" className="">
                  Mohali, Punjab
                </option>
                <option
                  name="location"
                  value="Kolkata, West Bengal"
                  className=""
                >
                  Kolkata, West Bengal
                </option>
              </Form.Select>
              {errors.location?.type === "required" && (
                <p className="text-danger">please select any one</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                className="bg-light fit-content"
                {...register("education")}
              >
                <option>select education</option>
                <option name="education" value="Bachelor's degree">
                  Bachelor's degree
                </option>
                <option name="education" value="Master's degree">
                  Master's degree
                </option>
                <option name="education" value="Intermediate/Diploma">
                  Intermediate/Diploma
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                className="bg-light fit-content"
                {...register("jobType")}
              >
                <option>select jobType</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
                <option value="Internship">Internship</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>salary</Form.Label>
              <Form.Control
                type="text"
                className="shadow-none"
                {...register("salary", { required: true })}
              />
              {errors.salary?.type === "required" && (
                <p className="text-danger">please enter salary</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Resume</Form.Label>
              <Form.Control
                type="text"
                className="shadow-none"
                placeholder="type true, if resume is must"
                {...register("resume")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>companyURL</Form.Label>
              <Form.Control
                type="text"
                className="shadow-none"
                {...register("companyURL")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>shortDescription</Form.Label>
              <Form.Control
                type="text"
                className="shadow-none"
                {...register("shortDescription")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>longDescription</Form.Label>
              <Form.Control
                type="text"
                className="shadow-none"
                {...register("longDescription")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>experience</Form.Label>
              <Form.Control
                type="text"
                className="shadow-none"
                {...register("experience")}
              />
            </Form.Group>
            <Button type="submit" variant="dark" className="mb-3">
              Upload
            </Button>
          </Form>
        </Col>
      </Row>
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

export default Postjob;
