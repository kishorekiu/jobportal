import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import registerSvg from "../images/register.svg";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [err, setErr] = useState({
    errMsg: "",
    isErr: false,
  });
  const navigate = useNavigate();
  const onFormSubmit = async (userObj) => {
    const response = await axios
      .post("/user/register", userObj)
      .then((res) => res.data);
    if (response.message === "User Created") {
      navigate("/login");
    } else {
      setErr({ ...err, isErr: true, errMsg: response.message });
    }
  };
  return (
    <Row xs="1" sm="1" md="1" lg="2">
      <Col className="col-xs-4 col-sm-6 col-md-6 col-lg-4 mx-auto p-3 rounded border">
        <h3 className="fs-3 text-dark text-center mb-3">Register</h3>
        <h4 className="text-danger text-center mb-3">{err.errMsg}</h4>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Form.Group className="mb-3">
            <Form.Check
              inline
              label="User"
              type="radio"
              name="radio"
              value="user"
              className="shadow-none"
              {...register("userType", { required: true })}
            />
            <Form.Check
              inline
              label="Recruiter"
              type="radio"
              name="radio"
              value="recruiter"
              {...register("userType", { required: true })}
            />
            {errors.userType?.type === "required" && (
              <p className="text-danger">please check any one</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              className="shadow-none"
              {...register("username", {
                required: true,
                minLength: 4,
                maxLength: 30,
              })}
            />
            {errors.username?.type === "required" && (
              <p className="text-danger">please enter username</p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="text-danger">min length 4 chars</p>
            )}
            {errors.username?.type === "maxLength" && (
              <p className="text-danger">max length 30 chars</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="shadow-none"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
                pattern: /^[a-zA-Z0-9!@#$%^&*]{8,16}$/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger">Please enter password</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-danger">enter atleast 8 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-danger">max length 16 chars</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-danger">pattern allowed [a-zA-z0-9!@#$%^&*]</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              className="shadow-none"
              {...register("email")}
            />
          </Form.Group>
          <Row>
            <Col>
              <Button
                type="submit"
                variant="dark"
                className="shadow-none dark-button"
              >
                register
              </Button>
            </Col>
            <Col className="col-md-auto">
              <Nav className="ms-auto">
                <NavLink
                  to="/login"
                  className="nav-link text-dark mb-3 d-block text-right"
                >
                  Already a user, Login
                </NavLink>
              </Nav>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col>
        <img src={registerSvg} alt="register svg" className="svg-lg" />
      </Col>
    </Row>
  );
}

export default Register;
