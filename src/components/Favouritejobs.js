import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddToFavourite, ClearFavourites } from "../slices/favouriteSlice";
import Jobs from "./Jobs";
function Favouritejobs() {
  const { userObj, isSuccess } = useSelector((state) => state.data);
  const { favouriteJobs } = useSelector((state) => state.favourite);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      let getFavouriteJobs = (userObj) => {
        dispatch(AddToFavourite(userObj));
      };
      getFavouriteJobs(userObj);
    }
  }, [isSuccess, userObj, dispatch]);
  const handleRemoveFavourites = (userObj) => {
    dispatch(ClearFavourites(userObj));
  };
  return (
    <div>
      {favouriteJobs.length === 0 ? (
        <p className="text-info fs-3 fw-bold text-center">
          No Favourite Jobs for, {userObj.username}
        </p>
      ) : (
        <div>
          <Button
            variant="danger"
            className="mx-auto"
            onClick={() => handleRemoveFavourites(userObj)}
          >
            Clear Favourites
          </Button>
          <Jobs jobs={favouriteJobs} />
        </div>
      )}

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

export default Favouritejobs;
