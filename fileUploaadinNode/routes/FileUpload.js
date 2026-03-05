const express = require("express");
const router = express.Router();

const {localFileUpload,imageUpload,videoUpload,imageFileReducer} = require("../controller/fileUpload");
const {getData} = require("../controller/getData");

//api route
router.post("/loacalFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageFileReducer",imageFileReducer);
router.get("/getData",getData);

module.exports = router;
