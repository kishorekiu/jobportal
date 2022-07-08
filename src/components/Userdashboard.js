import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Jobs from "./Jobs";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../App.css";

function Userdashboard() {
  const { userObj } = useSelector((state) => state.data);
  let [jobs, setJobs] = useState([]);
  let [filteredJobs, setFilteredJobs] = useState([]);
  let [isFilter, setIsFilter] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onFormSubmit = (Obj) => {
    let filteredJobs = jobs;
    if (
      Obj.location !== "select location" &&
      Obj.education !== "select education" &&
      Obj.jobType !== "select jobType"
    ) {
      filteredJobs = filteredJobs.filter(
        (job) => job.location === Obj.location
      );
      filteredJobs = filteredJobs.filter(
        (job) => job.education === Obj.education
      );
      filteredJobs = filteredJobs.filter((job) => job.jobType === Obj.jobType);
      setFilteredJobs(filteredJobs);
      setIsFilter(true);
    } else if (
      Obj.location !== "select location" &&
      Obj.education !== "select education"
    ) {
      filteredJobs = filteredJobs.filter(
        (job) => job.location === Obj.location
      );
      filteredJobs = filteredJobs.filter(
        (job) => job.education === Obj.education
      );
      setFilteredJobs(filteredJobs);
      setIsFilter(true);
    } else if (
      Obj.location !== "select location" &&
      Obj.jobType !== "select jobType"
    ) {
      filteredJobs = filteredJobs.filter(
        (job) => job.location === Obj.location
      );
      filteredJobs = filteredJobs.filter((job) => job.jobType === Obj.jobType);
      setFilteredJobs(filteredJobs);
      setIsFilter(true);
    } else if (
      Obj.education !== "select education" &&
      Obj.jobType !== "select jobType"
    ) {
      filteredJobs = filteredJobs.filter(
        (job) => job.education === Obj.education
      );
      filteredJobs = filteredJobs.filter((job) => job.jobType === Obj.jobType);
      setFilteredJobs(filteredJobs);
      setIsFilter(true);
    } else if (Obj.location !== "select location") {
      filteredJobs = filteredJobs.filter(
        (job) => job.location === Obj.location
      );
      setFilteredJobs(filteredJobs);
      setIsFilter(true);
    } else if (Obj.education !== "select education") {
      filteredJobs = filteredJobs.filter(
        (job) => job.education === Obj.education
      );
      setFilteredJobs(filteredJobs);
      setIsFilter(true);
    } else if (Obj.jobType !== "select jobType") {
      filteredJobs = filteredJobs.filter((job) => job.jobType === Obj.jobType);
      setFilteredJobs(filteredJobs);
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  };
  const handleClearFilters = () => {
    setIsFilter(false);
    reset();
  };
  useEffect(() => {
    const getJobs = async () => {
      let jobs = await axios.get("/user/get-jobs").then((res) => res.data);
      setJobs(jobs.jobs);
    };
    getJobs();
  }, []);

  return (
    <div className="mt-2">
      <div className="mb-3 text-success text-center">
        welcome {userObj.username}
      </div>
      <div>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Row xs="1" sm="1" md="3" lg="4" className="mx-auto">
            <Col>
              <Form.Select className="bg-light" {...register("location")}>
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
            </Col>
            <Col>
              <Form.Select className="bg-light" {...register("education")}>
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
            </Col>
            <Col>
              <Form.Select className="bg-light" {...register("jobType")}>
                <option>select jobType</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
                <option value="Internship">Internship</option>
              </Form.Select>
            </Col>
            <Col>
              <Button variant="info" type="submit">
                Find Jobs
              </Button>{" "}
              <Button
                type="button"
                variant="danger"
                onClick={handleClearFilters}
              >
                clear filters
              </Button>
            </Col>
          </Row>
        </Form>
        {!isFilter ? (
          <>
            <p className="text-info mt-3 text-center">no filters applied</p>
            <Jobs jobs={jobs} />
          </>
        ) : (
          <>
            {filteredJobs.length === 0 ? (
              <p className="text-danger mt-3 text-center">
                No Jobs Available for selected filters
              </p>
            ) : (
              <>
                <p className="text-success mt-3 text-center">
                  filtered Jobs...count: {filteredJobs.length}
                </p>
                <Jobs jobs={filteredJobs} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Userdashboard;
