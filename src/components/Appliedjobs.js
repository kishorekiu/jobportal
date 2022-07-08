import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddToApplied, ClearApplied } from "../slices/jobSlice";
import Jobs from "./Jobs";
function Appliedjobs() {
  const { userObj, isSuccess } = useSelector((state) => state.data);
  const { appliedJobs } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      let getFavouriteJobs = (userObj) => {
        dispatch(AddToApplied(userObj));
      };
      getFavouriteJobs(userObj);
    }
  }, [isSuccess, userObj, dispatch]);
  const handleRemoveAppliedJobs = (userObj) => {
    dispatch(ClearApplied(userObj));
  };
  return (
    <div>
      <>
        {appliedJobs.length === 0 ? (
          <p className="text-info fs-3 fw-bold text-center">
            No Applied Jobs for, {userObj.username}
          </p>
        ) : (
          <div>
            <Button
              variant="danger"
              className="mx-auto"
              onClick={() => handleRemoveAppliedJobs(userObj)}
            >
              Clear Jobs
            </Button>
            <Jobs jobs={appliedJobs} />
          </div>
        )}
      </>
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

export default Appliedjobs;
