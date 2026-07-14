const express = require("express");

const {
 searchLocationController
}=require("../controllers/locationController");


const router=express.Router();


router.get(
 "/locations",
 searchLocationController
);


module.exports=router;