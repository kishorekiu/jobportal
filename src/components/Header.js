import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clearLoginStatus } from "../slices/userSlice";
import { useEffect, useState } from "react";
import { ResumeStatus } from "../slices/resumeSlice";
function Header() {
  const { userObj, isSuccess } = useSelector((state) => state.data);
  let [userType, setUserType] = useState("");
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(clearLoginStatus());
  };
  const handleresumeStatus = (userObj) => {
    dispatch(ResumeStatus(userObj));
  };
  useEffect(() => {
    if (userObj !== null) {
      setUserType(userObj.userType);
    }
  }, [setUserType, userObj]);
  return (
    <div className="border-bottom">
      <Navbar
        className="bg-white navbar fixed-top border-bottom"
        bg=""
        expand="sm"
      >
        <Container className="">
          <Navbar.Brand className="blue-violet fw-bold fs-3">
            Job Portal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {!isSuccess ? (
                <>
                  <NavLink to="/" className="nav-link text-dark">
                    Home
                  </NavLink>
                  <NavLink to="/register" className="nav-link text-dark">
                    Register
                  </NavLink>
                  <NavLink to="/login" className="nav-link text-dark">
                    Login
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="nav-link text-dark"
                    onClick={logout}
                  >
                    Logout
                  </NavLink>
                  {userType === "user" ? (
                    <Dropdown align="end" drop="">
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        onDrop="start"
                      >
                        <i class="fa fa-cog fa-2xl " aria-hidden="true"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link className="nav-link fw-bold" to="/favourites">
                            Favourites
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link className="nav-link fw-bold" to="/appliedjobs">
                            Applied Jobs
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link
                            className="nav-link fw-bold"
                            to="/uploadresume"
                            onClick={() => handleresumeStatus(userObj)}
                          >
                            Upload Resume
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <>
                      <NavLink to="/postjob" className="nav-link text-dark">
                        PostJob
                      </NavLink>
                    </>
                  )}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
