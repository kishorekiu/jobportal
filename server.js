const express = require("express");
const path = require("path");
const mongoClient = require("mongodb").MongoClient;
const app = express();

app.use(express.static(path.join(__dirname, "build")));

const DB_URL =
  "mongodb+srv://kishorekrissh7:kishorekrissh7@cluster0.slyeo.mongodb.net/?retryWrites=true&w=majority";

mongoClient
  .connect(DB_URL)
  .then((client) => {
    const dbObj = client.db("jobportal");
    const userCollectionObject = dbObj.collection("usercollection");
    app.set("userCollectionObject", userCollectionObject);
    console.log("connected to usercollection");
  })
  .catch((err) => console.log("error in connecting to usercollection", err));

mongoClient
  .connect(DB_URL)
  .then((client) => {
    const dbObj = client.db("jobportal");
    const jobCollectionObject = dbObj.collection("jobcollection");
    app.set("jobCollectionObject", jobCollectionObject);
    console.log("connected to jobcollection");
  })
  .catch((err) => console.log("error in connecting to job collection", err));

mongoClient
  .connect(DB_URL)
  .then((client) => {
    const dbObj = client.db("jobportal");
    const resumeCollectionObject = dbObj.collection("resumecollection");
    app.set("resumeCollectionObject", resumeCollectionObject);
    console.log("connected to resumecollection");
  })
  .catch((err) => console.log("error in connecting to job collection", err));

const userApp = require("./APIs/userApi");

app.use("/user", userApp);

app.listen(5000, () => console.log("server runnig on 5000..."));
