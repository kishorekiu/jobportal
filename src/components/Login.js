import React, { useEffect } from "react";
import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { userLogin } from "../slices/userSlice";
import loginSvg from "../images/login.svg";
function Login() {
  let { userObj, isSuccess, isError, errMsg } = useSelector(
    (state) => state.data
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (userObj) => {
    dispatch(userLogin(userObj));
  };
  useEffect(() => {
    if (isSuccess) {
      if (userObj.userType === "user") {
        navigate("/userdashboard");
      } else if (userObj.userType === "recruiter") {
        navigate("/recruiterdashboard");
      }
    }
  }, [isSuccess, userObj, navigate]);
  return (
    <Row xs="1" sm="1" md="2" lg="2">
      <Col>
        <img src={loginSvg} alt="login svg" className="svg-lg" />
      </Col>
      <Col className="col-xs-4 col-sm-6 col-md-6 col-lg-4 mx-auto p-4 rounded border">
        <h1 className="fs-3 text-dark text-center ">Login</h1>
        {isError && <p className="text-danger text-center">{errMsg}</p>}
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="shadow-none"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger">please enter password</p>
            )}
          </Form.Group>
          <Row>
            <Col>
              <Button
                type="submit"
                variant="dark"
                className="shadow-none dark-button"
              >
                Login
              </Button>
            </Col>
            <Col className="col-md-auto">
              <Nav className="ms-auto">
                <NavLink
                  to="/register"
                  className="nav-link text-dark mb-3 d-block text-right"
                >
                  new Here, Register
                </NavLink>
              </Nav>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
