const express = require("express");
const userApp = express.Router();
userApp.use(express.json());
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

userApp.post("/register", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const userObj = request.body;
  //check for deuplicate usernames
  const userAlreadyInDB = await userCollectionObject.findOne({
    username: userObj.username,
  });
  if (userAlreadyInDB !== null) {
    response.send({ message: "Username not available...try other username" });
  } else {
    let hashPassword = await bcryptjs.hash(userObj.password, 6);
    userObj.password = hashPassword;
    await userCollectionObject.insertOne(userObj);
    response.send({ message: "User Created" });
  }
});

userApp.post("/login", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const userCredentialObject = request.body;
  const user = await userCollectionObject.findOne({
    username: userCredentialObject.username,
  });
  //if username not exist
  if (user === null) {
    response.send({ message: "invalid username" });
  }
  //if user exist
  else {
    const isTrue = await bcryptjs.compare(
      userCredentialObject.password,
      user.password
    );
    //if password invalid
    if (isTrue !== true) {
      response.send({ message: "invalid password" });
    } else {
      let token = jwt.sign({ username: user.username }, "abcdefghij", {
        expiresIn: 20,
      });
      response.send({
        message: "success",
        token: token,
        userObj: user,
      });
    }
  }
});

userApp.post("/postjobs", async (request, response) => {
  let jobCollectionObject = request.app.get("jobCollectionObject");
  const jobs = request.body;
  await jobCollectionObject.insertMany(jobs);
  response.send({ message: "jobs posted " });
});

userApp.get("/get-jobs", async (request, response) => {
  let jobCollectionObject = request.app.get("jobCollectionObject");
  const jobs = await jobCollectionObject.find().toArray();
  response.send({ message: "got jobs", jobs: jobs });
});

userApp.post("/addtofavourite", async (request, response) => {
  let userCollectionObject = request.app.get("userCollectionObject");
  const data = request.body;
  let userInDb = await userCollectionObject.findOne({
    username: data.userObj.username,
  });
  if (!userInDb.favouriteJobs) {
    await userCollectionObject.updateOne(
      { username: data.userObj.username },
      { $set: { favouriteJobs: [] } }
    );
  }
  let indexFound = userInDb.favouriteJobs.findIndex(
    (job) => job.jobTitle === data.job.jobTitle
  );
  if (indexFound >= 0) {
    response.send({ message: "Already Added to Favourites" });
  } else {
    userInDb.favouriteJobs.push(data.job);
    await userCollectionObject.updateOne(
      { username: data.userObj.username },
      { $set: { ...userInDb } }
    );
    response.send({ message: "success" });
  }
});

userApp.post("/applynow", async (request, response) => {
  let userCollectionObject = request.app.get("userCollectionObject");
  const data = request.body;
  let userInDb = await userCollectionObject.findOne({
    username: data.userObj.username,
  });
  if (!userInDb.appliedJobs) {
    await userCollectionObject.updateOne(
      { username: data.userObj.username },
      { $set: { appliedJobs: [] } }
    );
  }
  if (userInDb.appliedJobs) {
    let indexFound = userInDb.appliedJobs.findIndex(
      (job) => job.jobTitle === data.job.jobTitle
    );
    if (indexFound >= 0) {
      response.send({ message: "Already Applied to this Job" });
    } else {
      userInDb.appliedJobs.push(data.job);
      await userCollectionObject.updateOne(
        { username: data.userObj.username },
        { $set: { ...userInDb } }
      );
      response.send({ message: "success" });
    }
  }
});

userApp.post("/get-favourite-jobs", async (request, response) => {
  let userCollectionObject = request.app.get("userCollectionObject");
  const userObj = request.body;
  const userInDb = await userCollectionObject.findOne({
    username: userObj.username,
  });
  if (!userInDb.favouriteJobs) {
    response.send({
      message: `No Favourite Jobs added by, ${userInDb.username}`,
    });
  } else {
    const favouriteJobs = userInDb.favouriteJobs;
    response.send({ message: "success", payload: favouriteJobs });
  }
});

userApp.post("/get-applied-jobs", async (request, response) => {
  let userCollectionObject = request.app.get("userCollectionObject");
  const userObj = request.body;
  let userInDb = await userCollectionObject.findOne({
    username: userObj.username,
  });
  if (!userInDb.appliedJobs) {
    response.send({
      message: `No Favourite Jobs added by, ${userInDb.username}`,
    });
  } else {
    const appliedJobs = userInDb.appliedJobs;
    response.send({ message: "success", payload: appliedJobs });
  }
});

userApp.post("/delete-favourites", async (request, response) => {
  let userCollectionObject = request.app.get("userCollectionObject");
  const userObj = request.body;
  let userInDb = await userCollectionObject.findOne({
    username: userObj.username,
  });
  if (userInDb.favouriteJobs) {
    userInDb.favouriteJobs = [];
    await userCollectionObject.updateOne(
      { username: userObj.username },
      { $set: { ...userInDb } }
    );
  }
  response.send({ message: "success" });
});

userApp.post("/delete-applied", async (request, response) => {
  let userCollectionObject = request.app.get("userCollectionObject");
  const userObj = request.body;
  let userInDb = await userCollectionObject.findOne({
    username: userObj.username,
  });
  if (userInDb.appliedJobs) {
    userInDb.appliedJobs = [];
    await userCollectionObject.updateOne(
      { username: userObj.username },
      { $set: { ...userInDb } }
    );
  }
  response.send({ message: "success" });
});

userApp.post("/postoneresume", async (request, response) => {
  const resumeCollectionObject = request.app.get("resumeCollectionObject");
  const userCollectionObject = request.app.get("userCollectionObject");
  const userObj = request.body;
  const resumeObjIndb = await resumeCollectionObject.findOne({
    username: userObj.username,
  });
  let userInDb = await userCollectionObject.findOne({
    username: userObj.username,
  });

  if (resumeObjIndb) {
    response.send({ message: "already uploaded" });
  } else {
    await resumeCollectionObject.insertOne(userObj);
    userInDb.resumeStatus = "uploaded";
    await userCollectionObject.updateOne(
      { username: userObj.username },
      { $set: { ...userInDb } }
    );
    response.send({ message: "success" });
  }
});

userApp.post("/resumestatus", async (request, response) => {
  const resumeCollectionObject = request.app.get("resumeCollectionObject");
  const userObj = request.body;
  const userInDb = await resumeCollectionObject.findOne({
    username: userObj.username,
  });
  if (userInDb !== null) {
    response.send({ message: "resume already uploaded" });
  } else {
    response.send({ message: "" });
  }
});

userApp.post("/deleteresume", async (request, response) => {
  const resumeCollectionObject = request.app.get("resumeCollectionObject");
  const userObj = request.body;
  await resumeCollectionObject.deleteOne({ username: userObj.username });
  response.send({ message: "" });
});

userApp.get("/get-resumes", async (request, response) => {
  const resumeCollectionObject = request.app.get("resumeCollectionObject");
  const resumes = await resumeCollectionObject.find().toArray();
  response.send({ message: "success", resumes: resumes });
});

userApp.post("/postonejob", async (request, response) => {
  const jobCollectionObject = request.app.get("jobCollectionObject");
  const jobObj = request.body;
  let jobsInDb = await jobCollectionObject.find().toArray();
  if (jobsInDb) {
    jobsInDb.unshift(jobObj);
    await jobCollectionObject.remove({});
    await jobCollectionObject.insertMany(jobsInDb);
    response.send({ message: "success" });
  }
});

module.exports = userApp;
